import React from 'react';
import PropTypes from 'prop-types';
import './ResponsiveImage.scss';

/**
 * A component that displays a responsive image with various sizing options
 * @param {Object} props - The component props
 * @param {Object} props.sources - Image sources with different sizes and formats
 * @param {string} props.sources.small - Small size image path (jpg/png)
 * @param {string} [props.sources.medium] - Medium size image path
 * @param {string} [props.sources.large] - Large size image path
 * @param {string} [props.sources.smallWebp] - Small size WebP image path
 * @param {string} [props.sources.mediumWebp] - Medium size WebP image path
 * @param {string} [props.sources.largeWebp] - Large size WebP image path
 * @param {string} props.alt - Alt text for the image
 * @param {string} [props.className] - Additional CSS class names
 * @param {boolean} [props.lazy=true] - Whether to use lazy loading
 * @param {Object} [props.otherProps] - Additional props (...props) passed to picture element
 * @returns {JSX.Element} A responsive image component
 */
const ResponsiveImage = ({ 
  sources, 
  alt, 
  className = '',
  lazy = true,
  ...otherProps
}) => {
  const {
    small, 
    medium, 
    large, 
    smallWebp, 
    mediumWebp, 
    largeWebp
  } = sources;

  // Ensure at least small image is provided
  if (!small) {
    console.error('ResponsiveImage requires at least a small image source');
    return null;
  }

  return (
    <picture className={`responsive-image ${className}`} {...otherProps}>
      {/* WebP sources if available */}
      {largeWebp && <source 
        srcSet={largeWebp} 
        type="image/webp" 
        media="(min-width: 1024px)" 
      />}
      
      {mediumWebp && <source 
        srcSet={mediumWebp} 
        type="image/webp" 
        media="(min-width: 768px)" 
      />}
      
      {smallWebp && <source 
        srcSet={smallWebp} 
        type="image/webp" 
      />}
      
      {/* Standard image sources */}
      {large && <source 
        srcSet={large} 
        media="(min-width: 1024px)" 
      />}
      
      {medium && <source 
        srcSet={medium} 
        media="(min-width: 768px)" 
      />}
      
      <img 
        src={small} 
        alt={alt} 
        loading={lazy ? "lazy" : "eager"}
        className="responsive-image__img"
      />
    </picture>
  );
};

ResponsiveImage.propTypes = {
  sources: PropTypes.shape({
    small: PropTypes.string.isRequired,
    medium: PropTypes.string,
    large: PropTypes.string,
    smallWebp: PropTypes.string,
    mediumWebp: PropTypes.string,
    largeWebp: PropTypes.string
  }).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  lazy: PropTypes.bool,
  // Define that we accept any additional props with any values
  // This documents the spread props pattern used in the component
  // eslint-disable-next-line react/forbid-prop-types
  otherProps: PropTypes.object
};

export default ResponsiveImage;
