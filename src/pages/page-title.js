import React from "react";
import "./page-title.scss";

function PageTitle() {

    const pageTitleAndSubtitle = {
        title: "Peter Stackebrandt",
        subtitle: "Software-Entwickler"
    }

    return (
        <div className="container mt-0 text-primary">
            <h1 className="display-5">{pageTitleAndSubtitle.title}</h1>
            <p className="lead">{pageTitleAndSubtitle.subtitle}</p>
        </div>
    );
}

export default PageTitle;