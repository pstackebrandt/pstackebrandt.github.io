import React from "react";
import "./page-title.scss";

function PageTitle() {

    const pageTitleAndSubtitle = {
        title: "Peter Stackebrandt",
        subtitle: "Software-Entwickler in Feucht bei Nürnberg"
    }

    return (
        <div className="container mt-0 text-primary">
            <h1 className="display-3">{pageTitleAndSubtitle.title}</h1>
            <p className="lead">{pageTitleAndSubtitle.subtitle}</p>
        </div>
    );
}

export default PageTitle;