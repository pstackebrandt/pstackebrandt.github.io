import PropTypes from 'prop-types';
import React from 'react';
import '../styles/components/link-with-description.scss';

/**
 * A component that displays a link with an associated description
 * @param {Object} props - The component props
 * @param {string} props.url - The URL that the link points to
 * @param {string} props.linkText - The text content of the link
 * @param {string} props.description - A description of the link that appears below it
 * @returns {JSX.Element} A div containing a link and description
 */
const LinkWithDescription = ({ url, linkText, description }) => (
  <div className="link-with-description">
    <a
      href={url}
      className="link-with-description__link"
      target="_blank"
      rel="noopener noreferrer">
      {linkText}
    </a>
    <div className="link-with-description__description">
      <span>{description}</span>
    </div>
  </div>
);

LinkWithDescription.propTypes = {
  url: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default LinkWithDescription; 
