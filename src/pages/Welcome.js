import React from "react"
import PageTitle from '../pages/page-title';
import '../styles/components/welcome.scss';
import LinkCard from '../components/LinkCard';
import LinkWithDescription from '../components/LinkWithDescription';

// Main content of the page
export default function Welcome() {
    return (
        <div className="welcome">
            <div className="welcome__container">
                <PageTitle />

                <p className="welcome__text">Ich wohne in Feucht bei Nürnberg und habe langjährige Erfahrung in der Entwicklung von Apps und Services mit .NET. Neben meiner Leidenschaft für Webentwicklung interessiere ich mich besonders für den Einsatz von KI in der Softwareentwicklung.</p>

                <p className="welcome__text">Diese Webseite ist eine zentrale Anlaufstelle, um mehr über meine Fertigkeiten und meine Projekte zu erfahren. Derzeit arbeite ich daran, hier öffentlich zugängliche Links zu meinen Projekten zu sammeln und zu präsentieren.</p>

                <LinkWithDescription
                    url="https://www.linkedin.com/in/"
                    linkText="Mein LinkedIn-Profil"
                    description="Ausführliche Informationen zu meinem beruflichen Profil"
                />

                <p className="welcome__subtitle">Projekte</p>
                <ul className="welcome__list">
                    <li className="double-width">
                        <LinkCard
                            href="https://pstackebrandt.github.io/hacker-stories/"
                            text="Your Hacker Stories"
                            description="Ein React-Trainingsprojekt, das moderne Webentwicklungskonzepte an einem praxisnahen Beispiel veranschaulicht: einer Webanwendung, die es Nutzern ermöglicht, technologiebezogene Nachrichtenartikel von Hacker News zu suchen und zu durchsuchen. Hacker News ist eine renommierte Plattform für Tech-Nachrichten und Diskussionen, die besonders in der Entwickler-Community geschätzt wird. Die Anwendung bietet Nutzern die Möglichkeit, nach Themen zu suchen, die sie interessieren, die Anzahl der Likes jedes Artikels einzusehen und Kommentare aus der Tech-Community zu lesen."
                        />
                    </li>
                    <li>
                        <LinkCard
                            href="https://pstackebrandt.github.io/gas-costs-app/"
                            text="Fahrtkosten-Rechner"
                            description="Die App berechnet die Kosten für eine Fahrt anhand gefahrener Kilometer, des Kraftstoffverbrauchs und des Kraftstoffpreises. (React App, noch nicht responsiv)"
                        />
                    </li>
                    <li className="double-width">
                        <LinkCard
                            href="https://pstackebrandt.github.io/wordsworm-react/"
                            text="Wörterwurm"
                            description="Wordsworm ist ein interaktives Wortspiel, das Kindern auf unterhaltsame Weise hilft, ihren Wortschatz zu erweitern. Ich habe es als Abschlussprojekt eines React-Kurses entwickelt. Dabei können mehrere Spieler gemeinsam an einem Bildschirm eine Wortkette bilden, bei der jedes neue Wort mit dem letzten Buchstaben des vorherigen beginnen muss.

                            Das Spiel verfügt über zusätzliche Funktionen wie eine Spielerverwaltung. Nutzer können Spieler erstellen, löschen oder generierte Namen umbenennen. Die Spielstände bleiben auch beim Navigieren zwischen den Seiten erhalten. Am Ende des Spiels erfolgt eine Auswertung der eingegebenen Wörter und der erzielten Punkte.

                            Dieses Projekt demonstriert den Einsatz moderner React-Konzepte, darunter Hooks, Context API und React Router. Für das Styling wird Bootstrap verwendet."
                        />
                    </li>
                    <li>
                        <LinkCard
                            href="https://github.com/pstackebrandt"
                            text="Mein GitHub Repository"
                            description="Es enthält den Code von Übungsaufgaben und -projekten. Diese sind zwar meistens öffentlich zugänglich, bleiben ohne ihren Kontext aber häufig erklärungsbedürftig."
                        />
                    </li>
                    <li>
                        <LinkCard
                            href="https://www.bilderbrand.net/"
                            text="Bilderbrand.net"
                            description="Eine private Homepage, die ich mit WordPress erstellt habe."
                        />
                    </li>
                    <li>
                        <LinkCard
                            href="/"
                            text="Die aktuelle Webseite"
                            description="ist ebenfalls ein Trainingsprojekt. Sie ist responsiv und wurde mit React, React Router und SCSS geschrieben."
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
}