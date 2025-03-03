import PropTypes from 'prop-types';
import React from 'react';

import ResponsiveImage from '../ResponsiveImage';
import './ImageWithContent.scss';

/**
 * A component that displays an image alongside content (text, buttons, etc.)
 * Features:
 * - Configurable image position (left or right)
 * - Customizable image width at different screen sizes
 * - Responsive layout that switches from side-by-side to stacked on smaller screens
 * - Support for different image sizes and formats via ResponsiveImage
 * - Optional lazy loading for performance optimization
 * 
 * @param {Object} props - The component props
 * @param {Object} props.sources - Image sources with different sizes/formats
 * @param {string} props.imageAlt - Alt text for the image (important for accessibility)
 * @param {React.ReactNode} props.children - Content to display next to the image
 * @param {string} [props.className] - Additional CSS classes for customization
 * @param {string} [props.imagePosition='left'] - Position of image ('left' or 'right')
 * @param {number} [props.imageWidth] - Width of image column in pixels for desktop screens
 * @param {number} [props.mediumMaxWidth] - Maximum width of image on medium screens (tablets)
 * @param {number} [props.mobileMaxWidth] - Maximum width of image on small screens (phones)
 * @param {boolean} [props.lazy=true] - Whether to use lazy loading for image
 * @returns {JSX.Element} A responsive layout with image and content
 */
const ImageWithContent = ({
  sources,
  imageAlt,
  children,
  className = '',
  imagePosition = 'left',
  imageWidth = 300,
  mediumMaxWidth = 250,
  mobileMaxWidth = 200,
  lazy = true
}) => {
  // Define inline CSS variables to configure the component's layout
  // These variables are used in the SCSS file to control image dimensions
  const containerStyle = {
    '--image-width': `${imageWidth}px`,
    '--medium-max-width': `${mediumMaxWidth}px`,
    '--mobile-max-width': `${mobileMaxWidth}px`,
  };

  return (
    <div 
      data-testid="image-with-content"
      // Apply base class, conditional modifier for right alignment, and any custom classes
      className={`image-with-content ${
        imagePosition === 'right' ? 'image-with-content--image-right' : ''
      } ${className}`}
      style={containerStyle}
    >
      {/* Image container - maintains image dimensions and spacing */}
      <div className="image-with-content__image-container" data-testid="image-container">
        <ResponsiveImage
          sources={sources}
          alt={imageAlt}
          lazy={lazy}
          className="image-with-content__image"
        />
      </div>
      
      {/* Content container - holds children passed to component */}
      <div className="image-with-content__content" data-testid="content-container">
        {children}
      </div>
    </div>
  );
};

// PropTypes definition for component documentation and type checking
ImageWithContent.propTypes = {
  // Image sources object with required small size and optional larger sizes
  sources: PropTypes.shape({
    small: PropTypes.string.isRequired,  // Base/small image (required)
    medium: PropTypes.string,            // Medium size image for larger screens
    large: PropTypes.string,             // Large size image for desktop screens
    smallWebp: PropTypes.string,         // WebP format options for better performance
    mediumWebp: PropTypes.string,
    largeWebp: PropTypes.string
  }).isRequired,
  imageAlt: PropTypes.string.isRequired, // Alt text is required for accessibility
  children: PropTypes.node.isRequired,   // Content to display is required
  className: PropTypes.string,           // Optional additional classes
  imagePosition: PropTypes.oneOf(['left', 'right']), // Restrict to only valid options
  imageWidth: PropTypes.number,          // Width in pixels for desktop screens
  mediumMaxWidth: PropTypes.number,      // Width for medium-sized screens (tablets)
  mobileMaxWidth: PropTypes.number,      // Width for small mobile screens
  lazy: PropTypes.bool                   // Toggle for lazy loading
};

export default ImageWithContent; 