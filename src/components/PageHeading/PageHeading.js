import PropTypes from "prop-types";
import React from "react";
import "./PageHeading.scss";

/**
 * PageHeading component for displaying page titles and subtitles
 * Can be used across different pages with custom content
 */
function PageHeading({ title, subtitle, className }) {
  return (
    <div className={`page-heading__container ${className || ""}`}>
      <h1 className="page-heading__title">{title}</h1>
      {subtitle && <p className="page-heading__subtitle">{subtitle}</p>}
    </div>
  );
}

PageHeading.propTypes = {
  /**
   * Main title text for the page
   */
  title: PropTypes.string.isRequired,
  
  /**
   * Optional subtitle text
   */
  subtitle: PropTypes.string,
  
  /**
   * Optional additional CSS classes
   */
  className: PropTypes.string,
};

PageHeading.defaultProps = {
  subtitle: "",
  className: "",
};

export default PageHeading; 