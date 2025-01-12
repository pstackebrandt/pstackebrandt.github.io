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

                <div className="single-link-with-description">
                    <a className="welcome__link" href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">
                        Mein LinkedIn-Profil
                    </a>
                    <span className="single-link-description">Ausführliche Informationen zu meinem beruflichen Profil</span>
                </div>

                <p className="welcome__subtitle">Projekte</p>
                <ul className="welcome__list">
                    <li>
                        <a className="welcome__link" href="https://pstackebrandt.github.io/hacker-stories/" target="_blank" rel="noopener noreferrer">
                        Your Hacker Stories
                        </a>
                        <span>Ein React-Trainingsprojekt, das moderne Webentwicklungskonzepte an einem praxisnahen Beispiel veranschaulicht: einer Webanwendung, die es Nutzern ermöglicht, technologiebezogene Nachrichtenartikel von Hacker News zu suchen und zu durchsuchen. Hacker News ist eine renommierte Plattform für Tech-Nachrichten und Diskussionen, die besonders in der Entwickler-Community geschätzt wird. Die Anwendung bietet Nutzern die Möglichkeit, nach Themen zu suchen, die sie interessieren, die Anzahl der Likes jedes Artikels einzusehen und Kommentare aus der Tech-Community zu lesen.

                        </span>
                    </li>
                    <li>
                        <a className="welcome__link" href="https://pstackebrandt.github.io/gas-costs-app/" target="_blank" rel="noopener noreferrer">
                            Fahrtkosten-Rechner
                        </a>
                        <span>Die App berechnet die Kosten für eine Fahrt anhand gefahrener Kilometer, des Kraftstoffverbrauchs und des Kraftstoffpreises.
                            (React App, noch nicht responsiv)
                        </span>
                    </li>
                    <li>
                        <a className="welcome__link" href="https://github.com/pstackebrandt" target="_blank" rel="noopener noreferrer">
                            Mein GitHub Repository
                        </a>
                        <span>Es enthält den Code von Übungsaufgaben und -projekten. Diese sind zwar meistens öffentlich zugänglich, bleiben ohne ihren Kontext aber häufig erklärungsbedürftig.</span>
                    </li>
                    <li>
                        <a className="welcome__link" href="https://www.bilderbrand.net/" target="_blank" rel="noopener noreferrer">
                            Bilderbrand.net
                        </a>
                        <span>Eine private Homepage, die ich mit WordPress erstellt habe.</span>
                    </li>

                    <li>
                        <a className="welcome__link" href="/" target="_blank" rel="noopener noreferrer">
                            Die aktuelle Webseite
                        </a>
                        <span>ist ebenfalls ein Trainingsprojekt. Sie ist responsiv und wurde mit React, React Router und SCSS geschrieben.</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}