
/*
   Contains the breakpoints of the application.
*/
export const BREAKPOINTS = {
    SMALL: 480,
    MEDIUM: 768,
    LARGE: 1024
};

/* Sass-like helper for consistent media query syntax in JS 
   It is used to create media queries in the application.
   It is based on the breakpoints defined in the breakpoints.js file.
*/
export const mediaQuery = {
    small: `(max-width: ${BREAKPOINTS.SMALL}px)`,
    medium: `(max-width: ${BREAKPOINTS.MEDIUM}px)`,
    large: `(max-width: ${BREAKPOINTS.LARGE}px)`
}; 