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

                <p className="welcome__text">
                    Ich wohne in Feucht bei Nürnberg und habe langjährige Erfahrung in der Entwicklung von Apps und Services mit .NET. Neben meiner Leidenschaft für Webentwicklung interessiere ich mich besonders für den Einsatz von KI in der Softwareentwicklung.
                </p>

                <p className="welcome__text">
                    Diese Webseite ist eine zentrale Anlaufstelle, um mehr über meine Fertigkeiten und meine Projekte zu erfahren. Derzeit arbeite ich daran, hier öffentlich zugängliche Links zu meinen Projekten zu sammeln und zu präsentieren.
                </p>

                <LinkWithDescription
                    url="https://www.linkedin.com/in/peter-stackebrandt"
                    linkText="Mein LinkedIn-Profil"
                    description={`Ausführliche Informationen zu meinem beruflichen Profil`}
                />

                <p className="welcome__section-title">Projekte</p>
                <ul className="welcome__list">
                    <li className="double-width">
                        <LinkCard
                            href="https://pstackebrandt.github.io/hacker-stories/"
                            text="Your Hacker Stories"
                            description={`Dieses React-Trainingsprojekt setzt moderne Webtechnologien ein, um Technologie-Nachrichten zu suchen und anzuzeigen. 
                            
                            Die Daten stammen von Hacker News, einer bekannten Plattform für Technologie-Nachrichten und Entwicklerforen.
                            Bei der Implementierung orientierte ich mich an einem Beispielprojekt aus dem Buch "The Road to React" von Robin Wieruch, entwickelte jedoch häufig eigene Lösungen.
                            
                            (React, JavaScript, TypeScript, Vite, React Reducer, Error Handling, API-Calls, CSS Modules, SCSS)`}
                        />
                    </li>
                    <li>
                        <LinkCard
                            href="https://pstackebrandt.github.io/gas-costs-app/"
                            text="Fahrtkosten-Rechner"
                            description={`Die App berechnet die Kosten für eine Autofahrt anhand gefahrener Kilometer, des Kraftstoffverbrauchs und des Kraftstoffpreises.
                            
                            (React, JavaScript, noch nicht responsiv)`}
                        />
                    </li>
                    <li className="double-width">
                        <LinkCard
                            href="https://pstackebrandt.github.io/wordsworm-react/"
                            text="Wörterwurm"
                            description={`Wordsworm ist ein interaktives Wortspiel, das Kindern auf unterhaltsame Weise hilft, ihren Wortschatz zu erweitern. Ich habe es als Abschlussprojekt eines React-Kurses entwickelt. Mehrere Spieler können gemeinsam am gleichen Bildschirm eine Wortkette bilden, bei der jedes neue Wort mit dem letzten Buchstaben des vorherigen beginnen muss.

                            Das Spiel verfügt über eine Spielerverwaltung. Nutzer können Spieler erstellen, löschen oder generierte Namen umbenennen. Die Spielstände bleiben beim seitenübergreifenden Navigieren erhalten. Beim Spielende erfolgt eine Auswertung der Wörter und erzielten Punkte.

                            Diese komponentenbasierte Anwendung setzt die React Context API zur zentralen Verwaltung des globalen Zustands — beispielsweise von Spielerinformationen und Spielverlauf — ein, speichert den Zustand im Local Storage und verarbeitet Benutzerinteraktionen effizient. Die Benutzeroberfläche basiert auf Bootstrap und gewährleistet ein responsives Layout.
                            
                            (React SPA, JavaScript (ES6+), React Bootstrap, React Router, Component Composition Pattern, React Context, Class-based Models, Local Storage State Management)`}
                        />
                    </li>
                    <li>
                        <LinkCard
                            href="https://github.com/pstackebrandt"
                            text="Meine GitHub Repositorys"
                            description={`Die Repositorys beinhalten Code zu zahlreichen Übungsaufgaben und Projekten. Obwohl der Großteil öffentlich zugänglich ist, fehlt oft der nötige Kontext, um Zweck und Details des Codes vollständig zu erschließen.

                            Für einige Projekte wird GitHub Projects als Planungswerkzeug eingesetzt. Einzelne Projekte sind öffentlich einsehbar.`}
                        />
                    </li>
                    <li className="double-width">
                        <LinkCard
                            href="https://todo-rest-api-spring-boot3.onrender.com/swagger-ui/index.html"
                            text="To-do API mit Spring Boot und Docker"
                            description={`Diese API verwaltet Aufgaben in einer einfachen In-Memory-Liste. Sie validiert Eingaben in einer Serviceklasse und gibt HTTP-Statusmeldungen zurück. Der Link führt auf eine OpenAPI-Seite, die über die Endpunkte informiert.

                            Die Anwendung wurde mit Spring Boot 3 und Java 21 entwickelt. Sie ist mithilfe von Docker auf Amazon Corretto Alpine Linux containerisiert. Da sie kostenlos gehostet wird und das Image 530 MB groß ist, wird die Anwendung nach Inaktivität deaktiviert. Es kann bis zu 50 Sekunden dauern, bis sie wieder verwendbar ist.

                            Als Teil des Entwicklungsprozesses sorgen automatisierte Slice-Tests mit MockMVC sowie versionierte REST-Client-Tests für eine verlässliche Qualitätsprüfung. Dieses Setup veranschaulicht nicht nur einen unkomplizierten Ansatz für REST, sondern auch eine effiziente Containerisierung und einen reibungslosen Bereitstellungsprozess.
                            
                            (Spring Boot 3, Java 21, Docker, OpenAPI, Error Handling, Slice-Tests, REST-Client-Tests)`}
                        />
                    </li>
                    <li>
                        <LinkCard
                            href="https://www.bilderbrand.net/"
                            text="Bilderbrand.net"
                            description={`Eine kleine private Homepage, die ich mit WordPress erstellt habe.`}
                        />
                    </li>
                    <li className="double-width">
                        <LinkCard 
                            href="/"
                            text="Die aktuelle Webseite"
                            description={`Dieses Projekt ist ein kleines Trainingsprojekt, das als zentrale Plattform dient, um meine anderen Projekte miteinander zu verknüpfen.
                            
                            Es wurde mit React, React Router und SCSS entwickelt und bietet ein responsives Design für eine einfache Navigation. Dabei liegt der Fokus auf der Funktionalität als Übersichtsseite und einem komfortablen Deployment auf GitHub Pages. Features und Techniken setze ich sparsam ein.
                            
                            (React, React Router, SCSS, Responsive Design, GitHub Pages)`}
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
}