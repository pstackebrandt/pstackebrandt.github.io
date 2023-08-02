import React from "react"

import PageTitle from '../pages/page-title';

// Main content of the page
export default function Welcome() {

    return (
        <div className="welcome ms-5 me-5">
            <PageTitle />
            <h1 className="mt-5 m-5 text-center">Willkommen</h1>
            <p className="text-center mb-2 fs-5">Diese Webseite befindet sich aktuell noch in der Entwicklungsphase.</p>
            <p className="text-center mb-2 fs-5">Ich verwende sie als einfache Homepage und werde mit ihr auf andere Projekte
             und Seiten von mir verweisen.</p>
            <p className="text-center mb-2 fs-5">Zusätzlich ist diese Webseite ein aktuelles Übungsprojekt für das Erstellen
             von React-Anwendungen sowie für das Hosten mit GitHub Pages.</p>
        </div>
    );
}