import React from 'react';
import PropTypes from 'prop-types';
import './LinkCard.scss';

/** Helper that allows to render text with line breaks ('Rendering' in React is returning JSX elements.)
 * @param {string} text - The text to render including line break characters
 * @returns {React.ReactNode[]} Array of React elements including line break elements
 */
function renderTextWithLineBreaks(text) {
    return text.split(/\r?\n/).map((line, index, array) => (
        <React.Fragment key={index}>
            {line}
            {index < array.length - 1 && <br />}
        </React.Fragment>
    ));
}

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
                {renderTextWithLineBreaks(description)}
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