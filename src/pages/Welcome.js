import React from "react"
import PageTitle from '../pages/page-title';
import '../styles/components/welcome.scss';

// Main content of the page
export default function Welcome() {
    return (
        <div className="welcome">
            <div className="welcome__container">
                <PageTitle />
                <h1 className="welcome__title">Willkommen</h1>
                <p className="welcome__text">Ich bin Peter Stackebrandt, Softwareentwickler aus Feucht bei Nürnberg mit langjähriger Erfahrung in der Entwicklung von Apps und Services mit .NET. Neben meiner Leidenschaft für Webentwicklung interessiere ich mich besonders für den Einsatz von KI in der Softwareentwicklung.</p>
                <p className="welcome__text">Diese Webseite ist eine zentrale Anlaufstelle, um mehr über meine Arbeit und meine Projekte zu erfahren. Derzeit arbeite ich daran, öffentlich zugängliche Links zu meinen Projekten hier zu sammeln und zu präsentieren.</p>
                <p className="welcome__text">Bereits verfügbare Links:</p>
                <ul className="welcome__list">
                    <li><a className="welcome__link" href="https://github.com/pstackebrandt">Mein GitHub Repository</a>: Enthält den Code vieler Übungsprojekte.</li>
                    <li><a className="welcome__link" href="https://www.linkedin.com/in/">Mein LinkedIn-Profil</a>: Ausführliche Informationen zu meinem beruflichen Profil</li>
                    <li><a className="welcome__link" href="https://www.bilderbrand.net/">Bilderbrand.net</a>: Eine private Homepage, die ich mit WordPress erstellt habe.</li>
                </ul>
                <p className="welcome__text">Diese Webseite dient zusätzlich als persönliches Projekt, um moderne Webtechnologien wie React zu erlernen und anzuwenden.</p>
            </div>
        </div>
    );
}