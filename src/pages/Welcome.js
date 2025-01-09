import React from "react"
import PageTitle from '../pages/page-title';
import '../styles/components/welcome.scss';

// Main content of the page
export default function Welcome() {
    return (
        <div className="welcome">
            <div className="welcome__container">
                <PageTitle />

                <p className="welcome__text">Ich wohne in Feucht bei Nürnberg und habe langjährige Erfahrung in der Entwicklung von Apps und Services mit .NET. Neben meiner Leidenschaft für Webentwicklung interessiere ich mich besonders für den Einsatz von KI in der Softwareentwicklung.</p>

                <p className="welcome__text">Diese Webseite ist eine zentrale Anlaufstelle, um mehr über meine Fertigkeiten und meine Projekte zu erfahren. Derzeit arbeite ich daran, hier öffentlich zugängliche Links zu meinen Projekten zu sammeln und zu präsentieren.</p>

                <a className="welcome__link" href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">
                    Mein LinkedIn-Profil
                </a>
                <span>Ausführliche Informationen zu meinem beruflichen Profil</span>

                <p className="welcome__subtitle">Projekte</p>
                <ul className="welcome__list">
                    <li>
                        <a className="welcome__link" href="https://pstackebrandt.github.io/gas-costs-app/" target="_blank" rel="noopener noreferrer">
                            Fahrtkosten-Rechner-App
                        </a>
                        <span>Berechnet die Kosten für eine Fahrt anhand gefahrener Kilometer, des Kraftstoffverbrauchs und des Kraftstoffpreises.
                            (React App, nicht responsiv)
                        </span>
                    </li>
                    <li>
                        <a className="welcome__link" href="https://github.com/pstackebrandt" target="_blank" rel="noopener noreferrer">
                            Mein GitHub Repository
                        </a>
                        <span>Enthält den Code vieler Übungsprojekte.</span>
                    </li>
                    <li>
                        <a className="welcome__link" href="https://www.bilderbrand.net/" target="_blank" rel="noopener noreferrer">
                            Bilderbrand.net
                        </a>
                        <span>Meine private Homepage, die ich mit WordPress erstellt habe.</span>
                    </li>
                    <li>
                        <a className="welcome__link" href="/" target="_blank" rel="noopener noreferrer">
                            Die Webseite,
                        </a>
                        <span>die sie gerade besuchen, ist ebenfalls ein Trainingsprojekt. Sie ist responsiv und wurde mit React, React Router und SCSS geschrieben.</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}