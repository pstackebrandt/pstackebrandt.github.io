import React from 'react';
import PropTypes from 'prop-types';
import './LinkCard.scss';

/**
 * A component that displays a link with an associated description
 * @param {Object} props - The component props
 * @param {string} props.href - The URL that the link points to
 * @param {string} props.text - The text content of the link
 * @param {string} props.description - A description of the link that appears below it
 * @param {string} [props.className='link-card--default'] - Additional CSS class names to apply to the component
 * @returns {JSX.Element} A div containing a link and description
 */
const LinkCard = ({ href, text, description, className = 'link-card--default' }) => {
    return (
        <div className={`link-card ${className || ''}`}>
            <a 
                href={href} 
                className="link-card__link"
                target="_blank" 
                rel="noopener noreferrer"
            >
                {text}
            </a>
            <span className="link-card__description">
                {description}
            </span>
        </div>
    );
};

LinkCard.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default LinkCard; 