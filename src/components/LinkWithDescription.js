import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/link-with-description.scss';

/**
 * A component that displays a link with an associated description
 * @param {Object} props - The component props
 * @param {string} props.url - The URL that the link points to
 * @param {string} props.linkText - The text content of the link
 * @param {string} props.description - A description of the link that appears below it
 * @param {boolean} props.isInternal - Whether the link is an internal route (uses React Router Link)
 * @returns {JSX.Element} A div containing a link and description
 */
const LinkWithDescription = ({ url, linkText, description, isInternal = false, className = '' }) => (
  <div className={`link-with-description ${className}`}>
    {isInternal ? (
      <Link to={url} className="link-with-description__link">
        {linkText}
      </Link>
    ) : (
      <a
        href={url}
        className="link-with-description__link"
        target="_blank"
        rel="noopener noreferrer">
        {linkText}
      </a>
    )}
    <div className="link-with-description__description">
      <span>{description}</span>
    </div>
  </div>
);

LinkWithDescription.propTypes = {
  url: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isInternal: PropTypes.bool,
  className: PropTypes.string
};

export default LinkWithDescription; 
