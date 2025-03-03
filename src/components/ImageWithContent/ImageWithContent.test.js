import { render, screen, within, act } from '@testing-library/react';
import React from 'react';

import ImageWithContent from './ImageWithContent';

// Mock the ResponsiveImage component
jest.mock('../ResponsiveImage', () => {
  return function MockResponsiveImage(props) {
    return (
      <div data-testid="responsive-image" data-props={JSON.stringify(props)}>
        Mock Image
      </div>
    );
  };
});

// Mock window.innerWidth for testing responsiveness
const originalInnerWidth = window.innerWidth;
const mockWindowResize = (width) => {
  act(() => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: width,
    });
    window.dispatchEvent(new Event('resize'));
  });
};

describe('ImageWithContent', () => {
  const mockSources = {
    small: 'image-small.jpg',
    medium: 'image-medium.jpg',
    large: 'image-large.jpg',
    smallWebp: 'image-small.webp',
  };

  // Restore original window.innerWidth after tests
  afterEach(() => {
    Object.defineProperty(window, 'innerWidth', {
      value: originalInnerWidth,
      writable: true,
      configurable: true,
    });
  });

  test('renders with default props', () => {
    render(
      <ImageWithContent
        sources={mockSources}
        imageAlt="Test image"
      >
        <p>Test content</p>
      </ImageWithContent>
    );
    
    // Check container classes
    const container = screen.getByTestId('image-with-content');
    expect(container).toHaveClass('image-with-content');
    expect(container).not.toHaveClass('image-with-content--image-right');
    
    // Check content renders
    const contentContainer = screen.getByTestId('content-container');
    const contentText = within(contentContainer).getByText('Test content');
    expect(contentText).toBeInTheDocument();
    
    // Check image renders with correct props
    const image = screen.getByTestId('responsive-image');
    expect(image).toBeInTheDocument();
    
    const imageProps = JSON.parse(image.dataset.props);
    expect(imageProps.sources).toEqual(mockSources);
    expect(imageProps.alt).toBe('Test image');
    expect(imageProps.lazy).toBe(true);
  });

  test('renders with image on the right', () => {
    render(
      <ImageWithContent
        sources={mockSources}
        imageAlt="Test image"
        imagePosition="right"
      >
        <p>Test content</p>
      </ImageWithContent>
    );
    
    const container = screen.getByTestId('image-with-content');
    expect(container).toHaveClass('image-with-content--image-right');
  });

  test('renders with custom image width', () => {
    render(
      <ImageWithContent
        sources={mockSources}
        imageAlt="Test image"
        imageWidth={500}
      >
        <p>Test content</p>
      </ImageWithContent>
    );
    
    const container = screen.getByTestId('image-with-content');
    expect(container).toHaveStyle({
      '--image-width': '500px'
    });
  });

  test('renders with custom medium and mobile widths', () => {
    render(
      <ImageWithContent
        sources={mockSources}
        imageAlt="Test image"
        imageWidth={500}
        mediumMaxWidth={400}
        mobileMaxWidth={300}
      >
        <p>Test content</p>
      </ImageWithContent>
    );
    
    const container = screen.getByTestId('image-with-content');
    expect(container).toHaveStyle({
      '--image-width': '500px',
      '--medium-max-width': '400px',
      '--mobile-max-width': '300px'
    });
  });

  test('renders with custom className', () => {
    render(
      <ImageWithContent
        sources={mockSources}
        imageAlt="Test image"
        className="custom-class"
      >
        <p>Test content</p>
      </ImageWithContent>
    );
    
    const container = screen.getByTestId('image-with-content');
    expect(container).toHaveClass('custom-class');
  });

  test('renders with lazy loading disabled', () => {
    render(
      <ImageWithContent
        sources={mockSources}
        imageAlt="Test image"
        lazy={false}
      >
        <p>Test content</p>
      </ImageWithContent>
    );
    
    const image = screen.getByTestId('responsive-image');
    const imageProps = JSON.parse(image.dataset.props);
    expect(imageProps.lazy).toBe(false);
  });

  test('handles window resize events', () => {
    render(
      <ImageWithContent
        sources={mockSources}
        imageAlt="Test image"
        mediumMaxWidth={250}
        mobileMaxWidth={200}
      >
        <p>Test content</p>
      </ImageWithContent>
    );
    
    // Test small screen (mobile) view
    mockWindowResize(400);
    
    // Test medium screen (tablet) view
    mockWindowResize(700);
    
    // Test desktop view 
    mockWindowResize(1024);
    
    // We can't easily test the responsive behavior directly without additional setup,
    // but this ensures the resize handler doesn't cause errors and the component
    // can handle all screen size breakpoints gracefully
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  test('renders with default props and sets all required CSS variables', () => {
    render(
      <ImageWithContent
        sources={mockSources}
        imageAlt="Test image"
      >
        <p>Test content</p>
      </ImageWithContent>
    );
    
    const container = screen.getByTestId('image-with-content');
    
    // Check that all required CSS variables are set, even with default values
    expect(container).toHaveStyle({
      '--image-width': '300px',
      '--medium-max-width': '250px',
      '--mobile-max-width': '200px'
    });
  });
}); 