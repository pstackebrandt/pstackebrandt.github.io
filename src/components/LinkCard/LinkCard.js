import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getContentLength } from './config';
import './LinkCard.scss';

/** Helper that allows to render text with line breaks
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
    const [isExpanded, setIsExpanded] = useState(false);
    const [maxChars, setMaxChars] = useState(getContentLength(window.innerWidth));

    useEffect(() => {
        const updateMaxChars = () => {
            setMaxChars(getContentLength(window.innerWidth));
        };

        window.addEventListener('resize', updateMaxChars);
        return () => window.removeEventListener('resize', updateMaxChars);
    }, []);

    const needsTruncation = description.length > maxChars;

    const lastSpaceIndex = description.lastIndexOf(' ', maxChars);
    const truncatedText = needsTruncation && !isExpanded
        ? description.slice(0, lastSpaceIndex > 0 ? lastSpaceIndex : maxChars) + '...'
        : description;

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
            <div className="link-card__description">
                {renderTextWithLineBreaks(truncatedText)}
                {needsTruncation && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="link-card__toggle"
                        aria-expanded={isExpanded}
                        aria-controls="description-text"
                    >
                        {isExpanded ? 'Show Less' : 'Show More'}
                    </button>
                )}
            </div>
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
