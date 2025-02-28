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
 * LinkCard component displays a link with a description that can be expanded/collapsed.
 * 
 * Features:
 * - Renders a link with customizable text
 * - Displays a description that can be truncated based on screen width
 * - Provides Show More/Show Less toggle for longer descriptions
 * - Handles line breaks in descriptions
 * - Responsive truncation based on viewport size
 * 
 * @param {Object} props - Component props
 * @param {string} props.href - URL for the link
 * @param {string} props.text - Link text to display
 * @param {string} props.description - Description text (can contain line breaks with \n)
 * @param {string} [props.className='link-card--default'] - Optional additional CSS class
 * @param {string} [props.variant='default'] - Visual variant of the card ('default', 'compact', etc.)
 * @returns {JSX.Element} Rendered LinkCard component
 */
const LinkCard = ({ href, text, description, className = 'link-card--default', ...props }) => {
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
        <div className={`link-card ${className || ''}`} {...props}>
            <a
                href={href}
                className="link-card__link"
                target="_blank"
                rel="noopener noreferrer"
            >
                {text}
            </a>
            <div className="link-card__description" data-testid="link-card-description">
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
