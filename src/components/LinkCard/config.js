import { BREAKPOINTS } from '../../config/breakpoints';

/*
    This config is used to determine the maximum number of characters to display in the description of a link card.
    It is based on the breakpoints defined in the breakpoints.js file.
*/

/*
    Count of always visible characters of the content of a link card.
 */
export const CONTENT_LENGTHS = {
    MOBILE: 300,
    TABLET: 500,
    DESKTOP: 800
};
// TODO Rename the keys to be more accurate. Small, Middle, Large

/**
 * Get the maximum number of characters to display in the 
 * description of a link card based on the width of the window.
 * @param {*} width - The width of the window.
 * @returns The maximum number of characters to display in the description of a link card.
 */
export const getContentLength = (width) => {
    if (width <= BREAKPOINTS.SMALL) {
        return CONTENT_LENGTHS.MOBILE;
    } else if (width <= BREAKPOINTS.MEDIUM) {
        return CONTENT_LENGTHS.TABLET;
    }
    return CONTENT_LENGTHS.DESKTOP;
}; 