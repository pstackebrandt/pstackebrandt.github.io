import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import { getContentLength } from './config';
import LinkCard from './LinkCard';

// Mock the config module
jest.mock('./config', () => ({
  getContentLength: jest.fn()
}));

/**
 * Test suite for the LinkCard component.
 * 
 * This test suite verifies that the LinkCard component correctly:
 * - Renders with required props (href, text, description)
 * - Renders the link with proper attributes (href, target, rel)
 * - Displays the description text
 * - Truncates long descriptions based on window width
 * - Shows/hides text properly when the toggle button is clicked
 * - Handles line breaks in the description
 */
describe('LinkCard', () => {
  const defaultProps = {
    href: 'https://example.com',
    text: 'Example Link',
    description: 'This is a sample description.'
  };

  beforeEach(() => {
    // Reset mocks
    jest.clearAllMocks();
    // Mock the getContentLength to return a fixed value
    getContentLength.mockReturnValue(20);
    // Mock window.innerWidth
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024
    });
  });

  it('renders with required props', () => {
    // Override getContentLength for this test to avoid truncation
    getContentLength.mockReturnValue(100);
    
    render(<LinkCard {...defaultProps} />);
    
    expect(screen.getByText('Example Link')).toBeInTheDocument();
    expect(screen.getByText('This is a sample description.')).toBeInTheDocument();
  });

  it('renders the link with proper attributes', () => {
    render(<LinkCard {...defaultProps} />);
    
    const linkElement = screen.getByText('Example Link');
    expect(linkElement.tagName).toBe('A');
    expect(linkElement).toHaveAttribute('href', 'https://example.com');
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
    expect(linkElement).toHaveClass('link-card__link');
  });

  it('applies custom className when provided', () => {
    render(
      <LinkCard 
        {...defaultProps} 
        className="custom-class" 
        data-testid="link-card-container" 
      />
    );
    
    // Use getByTestId to find the container instead of direct node access
    const cardElement = screen.getByTestId('link-card-container');
    expect(cardElement).toHaveClass('custom-class');
  });

  it('truncates long description and shows "Show More" button', () => {
    const longDescription = 'This is a very long description that should be truncated because it exceeds the maximum character limit.';
    
    render(<LinkCard {...defaultProps} description={longDescription} />);
    
    // Description should be truncated
    expect(screen.queryByText(longDescription)).not.toBeInTheDocument();
    
    // "Show More" button should be visible
    const showMoreButton = screen.getByText('Show More');
    expect(showMoreButton).toBeInTheDocument();
  });

  it('expands truncated description when "Show More" is clicked', () => {
    const longDescription = 'This is a very long description that should be truncated because it exceeds the maximum character limit.';
    
    render(<LinkCard {...defaultProps} description={longDescription} />);
    
    // Click "Show More" button
    fireEvent.click(screen.getByText('Show More'));
    
    // Full description should now be visible
    expect(screen.getByText(longDescription)).toBeInTheDocument();
    
    // Button text should change to "Show Less"
    expect(screen.getByText('Show Less')).toBeInTheDocument();
  });

  it('collapses expanded description when "Show Less" is clicked', () => {
    const longDescription = 'This is a very long description that should be truncated because it exceeds the maximum character limit.';
    
    render(<LinkCard {...defaultProps} description={longDescription} />);
    
    // First click to expand
    fireEvent.click(screen.getByText('Show More'));
    
    // Second click to collapse
    fireEvent.click(screen.getByText('Show Less'));
    
    // Description should be truncated again
    expect(screen.queryByText(longDescription)).not.toBeInTheDocument();
    
    // Button text should change back to "Show More"
    expect(screen.getByText('Show More')).toBeInTheDocument();
  });

  it('handles line breaks in description', () => {
    const descriptionWithLineBreaks = 'Line 1\nLine 2\nLine 3';
    
    // Override getContentLength for this test to avoid truncation
    getContentLength.mockReturnValue(100);
    
    render(<LinkCard {...defaultProps} description={descriptionWithLineBreaks} />);
    
    // Use the data-testid to directly access the description container
    const descriptionElement = screen.getByTestId('link-card-description');
    
    // Check if the description container includes all the lines
    expect(descriptionElement).toHaveTextContent('Line 1');
    expect(descriptionElement).toHaveTextContent('Line 2');
    expect(descriptionElement).toHaveTextContent('Line 3');
  });

  it('updates maxChars when window resizes', () => {
    render(<LinkCard {...defaultProps} />);
    
    // Initially called during component mount
    expect(getContentLength).toHaveBeenCalledWith(1024);
    
    // Simulate window resize
    Object.defineProperty(window, 'innerWidth', {
      value: 768
    });
    
    // Trigger resize event
    fireEvent(window, new Event('resize'));
    
    // Should be called again with new width
    expect(getContentLength).toHaveBeenCalledWith(768);
  });

  it('handles descriptions that are shorter than maxChars', () => {
    const shortDescription = 'Short description';
    getContentLength.mockReturnValue(100); // More than the description length
    
    render(<LinkCard {...defaultProps} description={shortDescription} />);
    
    // Description should be displayed without truncation
    expect(screen.getByText(shortDescription)).toBeInTheDocument();
    
    // No "Show More" button should be present
    expect(screen.queryByText('Show More')).not.toBeInTheDocument();
  });

  it('cleans up event listeners on unmount', () => {
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');
    
    const { unmount } = render(<LinkCard {...defaultProps} />);
    unmount();
    
    expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));
    
    removeEventListenerSpy.mockRestore();
  });
}); 
