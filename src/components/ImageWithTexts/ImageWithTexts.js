import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ResponsiveImage from '../ResponsiveImage';
import './ImageWithTexts.scss';

/**
 * A component that displays an image alongside text content
 * Responsive layout switches from 2 columns to 1 column on smaller screens
 * 
 * @param {Object} props - The component props
 * @param {Object} props.sources - Image sources with different sizes/formats
 * @param {string} props.imageAlt - Alt text for the image
 * @param {React.ReactNode} props.children - Content to display next to the image
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.imagePosition='left'] - Position of image ('left' or 'right')
 * @param {number} [props.imageWidth=300] - Width of image column in pixels
 * @param {boolean} [props.lazy=true] - Whether to use lazy loading for image
 * @returns {JSX.Element} A responsive layout with image and text
 */
const ImageWithTexts = ({
  sources,
  imageAlt,
  children,
  className = '',
  imagePosition = 'left',
  imageWidth = 300,
  lazy = true
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle = {
    '--image-width': `${imageWidth}px`,
  };

  return (
    <div 
      className={`image-with-texts ${
        imagePosition === 'right' ? 'image-with-texts--image-right' : ''
      } ${className}`}
      style={containerStyle}
    >
      <div className="image-with-texts__image-container">
        <ResponsiveImage
          sources={sources}
          alt={imageAlt}
          lazy={lazy}
          className="image-with-texts__image"
        />
      </div>
      
      <div className="image-with-texts__content">
        {children}
      </div>
    </div>
  );
};

ImageWithTexts.propTypes = {
  sources: PropTypes.shape({
    small: PropTypes.string.isRequired,
    medium: PropTypes.string,
    large: PropTypes.string,
    smallWebp: PropTypes.string,
    mediumWebp: PropTypes.string,
    largeWebp: PropTypes.string
  }).isRequired,
  imageAlt: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  imagePosition: PropTypes.oneOf(['left', 'right']),
  imageWidth: PropTypes.number,
  lazy: PropTypes.bool
};

export default ImageWithTexts;
