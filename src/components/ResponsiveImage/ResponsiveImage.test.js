import React from 'react';
import { render, screen } from '@testing-library/react';
import ResponsiveImage from './ResponsiveImage';

/**
 * Test suite for the ResponsiveImage component.
 * 
 * This test suite verifies that the ResponsiveImage component correctly:
 * - Renders with minimal required props (small image source and alt text)
 * - Implements lazy loading behavior (enabled by default, can be disabled)
 * - Applies custom class names when provided
 * - Handles missing image sources gracefully with appropriate error logging
 * - Correctly renders all source elements for different image sizes and formats (JPG/WebP)
 * 
 * Note: Tests use mock image paths rather than actual images, as we're testing
 * the component structure and attributes rather than actual image loading.
 */
describe('ResponsiveImage', () => {
  const minimalProps = {
    sources: { small: '/images/test-small.jpg' },
    alt: 'Test image'
  };

  it('renders with minimal required props', () => {
    render(<ResponsiveImage {...minimalProps} />);
    const imgElement = screen.getByAltText('Test image');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement.getAttribute('src')).toBe('/images/test-small.jpg');
  });

  it('uses lazy loading by default', () => {
    render(<ResponsiveImage {...minimalProps} />);
    const imgElement = screen.getByAltText('Test image');
    expect(imgElement.getAttribute('loading')).toBe('lazy');
  });

  it('disables lazy loading when lazy=false', () => {
    render(<ResponsiveImage {...minimalProps} lazy={false} />);
    const imgElement = screen.getByAltText('Test image');
    expect(imgElement.getAttribute('loading')).toBe('eager');
  });

  it('adds custom className when provided', () => {
    render(
      <ResponsiveImage 
        {...minimalProps} 
        className="custom-class" 
        data-testid="responsive-image" 
      />
    );
    const pictureElement = screen.getByTestId('responsive-image');
    expect(pictureElement).toHaveClass('custom-class');
  });

  it('handles missing small image gracefully', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
    
    render(
      <ResponsiveImage sources={{}} alt="Test image" />
    );
    
    expect(consoleSpy).toHaveBeenCalled();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    
    consoleSpy.mockRestore();
  });

  it('renders all source elements when all sources are provided', () => {
    const fullProps = {
      sources: {
        small: '/images/test-small.jpg',
        medium: '/images/test-medium.jpg',
        large: '/images/test-large.jpg',
        smallWebp: '/images/test-small.webp',
        mediumWebp: '/images/test-medium.webp',
        largeWebp: '/images/test-large.webp'
      },
      alt: 'Test image',
      'data-testid': 'responsive-image'
    };

    render(<ResponsiveImage {...fullProps} />);
    
    // Since source elements don't have roles, we need to suppress the linter here
    // eslint-disable-next-line testing-library/no-node-access
    const sourceElements = screen.getByTestId('responsive-image').querySelectorAll('source');
    expect(sourceElements).toHaveLength(5);
    
    // Check for WebP sources
    expect(sourceElements[0].getAttribute('type')).toBe('image/webp');
    expect(sourceElements[0].getAttribute('srcSet')).toBe('/images/test-large.webp');
    expect(sourceElements[0].getAttribute('media')).toBe('(min-width: 1024px)');
    
    // Check for standard sources
    expect(sourceElements[3].getAttribute('type')).toBeFalsy();
    expect(sourceElements[3].getAttribute('srcSet')).toBe('/images/test-large.jpg');
    expect(sourceElements[3].getAttribute('media')).toBe('(min-width: 1024px)');
  });
}); 