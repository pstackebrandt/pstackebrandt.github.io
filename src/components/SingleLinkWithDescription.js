const SingleLinkWithDescription = ({ url, linkText, description }) => (
  <div className="single-link-with-description">
    <a href={url} className="single-link">{linkText}</a>
    <span className="single-link-description">{description}</span>
  </div>
);

export default SingleLinkWithDescription; 