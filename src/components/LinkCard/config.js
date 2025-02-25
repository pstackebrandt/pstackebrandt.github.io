import { BREAKPOINTS } from '../../config/breakpoints';

/*
    This config is used to determine the maximum number of characters to display in the description of a link card.
    It is based on the breakpoints defined in the breakpoints.js file.
*/

/*
    Maximum number of characters that are always visible in a link card's content.
 */
export const CONTENT_LENGTHS = {
    SMALL: 300,    // for small windows and mobile devices  
    MEDIUM: 500,   // for medium windows and tablets
    LARGE: 800     // for large windows and desktops
};

/**
 * Get the maximum number of characters to display in the 
 * description of a link card based on the width of the window.
 * @param {number} width - The width of the window.
 * @returns {number} The maximum number of characters to display in the description of a link card.
 */
export const getContentLength = (width) => {
    if (width <= BREAKPOINTS.SMALL) {
        return CONTENT_LENGTHS.SMALL;
    } else if (width <= BREAKPOINTS.MEDIUM) {
        return CONTENT_LENGTHS.MEDIUM;
    }
    return CONTENT_LENGTHS.LARGE;
};
