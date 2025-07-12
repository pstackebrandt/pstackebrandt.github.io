import React from "react"

import '../styles/components/welcome.scss';
import ImageWithContent from '../components/ImageWithContent';
import LinkWithDescription from '../components/LinkWithDescription';
import PageHeading from '../components/PageHeading';
import portraitImageLarge from '../images/peter/peter-stackebrandt-portrait-large.jpg';
import portraitImageLargeWebp from '../images/peter/peter-stackebrandt-portrait-large.webp';
import portraitImageMedium from '../images/peter/peter-stackebrandt-portrait-medium.jpg';
import portraitImageMediumWebp from '../images/peter/peter-stackebrandt-portrait-medium.webp';
import portraitImageSmall from '../images/peter/peter-stackebrandt-portrait-small.jpg';
import portraitImageSmallWebp from '../images/peter/peter-stackebrandt-portrait-small.webp';

// Main content of the page
export default function Welcome() {
    const portraitSources = {
        small: portraitImageSmall,
        medium: portraitImageMedium,
        large: portraitImageLarge,
        smallWebp: portraitImageSmallWebp,
        mediumWebp: portraitImageMediumWebp,
        largeWebp: portraitImageLargeWebp
    };

    return (
        <div className="welcome">
            <div className="welcome__container">
                <PageHeading
                    title="Peter Stackebrandt"
                    subtitle="Software-Entwickler"
                />

                <ImageWithContent
                    sources={portraitSources}
                    imageAlt="Peter Stackebrandt"
                    imagePosition="left"
                    imageWidth={300}
                    mobileMaxWidth={200}
                    className="welcome__intro"
                >
                    <p className="welcome__text">
                        Ich wohne in Feucht bei Nürnberg und habe langjährige Erfahrung in der Entwicklung von Apps und Services mit .NET.
                    </p>

                    <p className="welcome__text">
                        Neben meiner Leidenschaft für Webentwicklung interessiere ich mich besonders für den Einsatz von KI in der Softwareentwicklung.
                    </p>

                    <p className="welcome__text">
                        Diese Webseite ist eine zentrale Anlaufstelle, um mehr über meine Fertigkeiten und meine Projekte zu erfahren. Entdecken Sie meine Arbeit und erfahren Sie mehr über meine Expertise.
                    </p>
                </ImageWithContent>

                <LinkWithDescription
                    url="https://www.linkedin.com/in/peter-stackebrandt"
                    linkText="Mein LinkedIn-Profil"
                    description={`Ausführliche Informationen zu meinem beruflichen Profil`}
                    className="welcome__link-item"
                />

                <LinkWithDescription
                    url="/projects"
                    linkText="Aktuelle Projekte"
                    description="Sehen Sie sich einige meiner aktuellen Trainingsprojekte an, um mehr über meine Arbeit zu erfahren."
                    isInternal={true}
                    className="welcome__link-item"
                />
            </div>
        </div>
    );
}