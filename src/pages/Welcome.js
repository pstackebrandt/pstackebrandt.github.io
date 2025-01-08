import React from "react"
import PageTitle from '../pages/page-title';
import '../styles/components/welcome.scss';

// Main content of the page
export default function Welcome() {
    return (
        <div className="welcome">
            <div className="welcome__container">
                <PageTitle />

                <p className="welcome__text">Ich wohne in Feucht bei Nürnberg und habe langjährige Erfahrung in der Entwicklung von Apps und Services mit .NET.
                    Neben meiner Leidenschaft für Webentwicklung interessiere ich mich besonders für den Einsatz von KI in der Softwareentwicklung.</p>
                <p className="welcome__text">Diese Webseite ist eine zentrale Anlaufstelle, um mehr über meine Arbeit und meine Projekte zu erfahren. Derzeit arbeite ich daran, öffentlich zugängliche Links zu meinen Projekten hier zu sammeln und zu präsentieren.</p>
                <p className="welcome__subtitle">Links</p>
                <ul className="welcome__list">
                    <li>
                        <a className="welcome__link" href="https://github.com/pstackebrandt" target="_blank" rel="noopener noreferrer">
                            Mein GitHub Repository
                        </a>
                        <span>Enthält den Code vieler Übungsprojekte.</span>
                    </li>
                    <li>
                        <a className="welcome__link" href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">
                            Mein LinkedIn-Profil
                        </a>
                        <span>Ausführliche Informationen zu meinem beruflichen Profil</span>
                    </li>
                    <li>
                        <a className="welcome__link" href="https://www.bilderbrand.net/" target="_blank" rel="noopener noreferrer">
                            Bilderbrand.net
                        </a>
                        <span>Eine private Homepage, die ich mit WordPress erstellt habe.</span>
                    </li>
                </ul>
                <p className="welcome__text">Diese Webseite dient zusätzlich als persönliches Projekt, um moderne Webtechnologien wie React zu erlernen und anzuwenden.</p>
            </div>
        </div>
    );
}