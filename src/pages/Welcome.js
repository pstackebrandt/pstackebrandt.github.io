import React from "react"

import PageTitle from '../pages/page-title';

// Main content of the page
export default function Welcome() {

    return (
        <div className="welcome ms-5 me-5">
            <PageTitle />
            <h1 className="mt-5 m-5 text-center">Willkommen</h1>
            <p className="text-center mb-2 fs-5">Ich bin Peter Stackebrandt, Softwareentwickler aus Feucht bei Nürnberg mit langjähriger Erfahrung in der Entwicklung von Apps und Services mit .NET. Neben meiner Leidenschaft für Webentwicklung interessiere ich mich besonders für den Einsatz von KI in der Softwareentwicklung.</p>
            <p className="text-center mb-2 fs-5">Diese Webseite ist eine zentrale Anlaufstelle, um mehr über meine Arbeit und meine Projekte zu erfahren. Derzeit arbeite ich daran, öffentlich zugängliche Links zu meinen Projekten hier zu sammeln und zu präsentieren.</p>
            <p className="text-center mb-2 fs-5">Bereits verfügbare Links:</p>
            <ul className="text-center mb-2 fs-5">
                <li><a href="https://github.com/pstackebrandt">Mein GitHub Repository</a>: Enthält den Code vieler Übungsprojekte.</li>
                <li><a href="https://www.linkedin.com/in/">Mein LinkedIn-Profil</a>:Ausführliche Informationen zu meinem beruflichen Profil</li>
                <li><a href="https://www.bilderbrand.net/">Bilderbrand.net</a>: Eine private Homepage, die ich mit WordPress erstellt habe.</li>
            </ul>
            <p className="text-center mb-2 fs-5">Diese Webseite dient zusätzlich als persönliches Projekt, um moderne Webtechnologien wie React zu erlernen und anzuwenden.</p>
        </div>
    );
}