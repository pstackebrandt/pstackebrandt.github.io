import React from "react";

import '../styles/components/projects.scss'; // We'll create this file later
import LinkCard from '../components/LinkCard';
import PageHeading from '../components/PageHeading';

// Main content of the page
export default function Projects() {
    return (
        <div className="projects">
            <div className="projects__container">
                <PageHeading 
                    title="Projekte"
                />
                
                <p className="projects__intro-text">
                    Hier finden Sie eine Sammlung gegenwärtiger Übungsprojekte.
                </p>

                <ul className="projects__list">
                    <li className="double-width">
                        <LinkCard
                            href="https://blazor-recipes-bwaabwhrejgqehgp.germanywestcentral-01.azurewebsites.net/"
                            text="Blazor Cookbook - Blazor Beispiele und Demos"
                            description={`Als Lernressource für Blazor-Entwicklung implementiert diese Single Page App verschiedene Konzepte.
                            
                            Einige Beispiele entstanden als Übungsaufgaben aus dem Buch "Blazor Web Development Cookbook" von P. Bazyluk. Das Projekt wurde durch fortgeschrittene Demos für die Blazor Render-Modi Auto-, Server- und WebAssembly sowie eine automatische Auflistung der Beispielseiten erweitert.
                            
                            Bei einer Überarbeitung der Anwendung kam ein automatisiertes Aufgabenmanagement mit Cursor AI und Markdown-Dateien zum Einsatz.
                            
                            (Blazor mit .NET 9, Bootstrap 5, Cursor AI, Azure App Service)`}
                        />
                    </li>
                    <li>
                        <LinkCard
                            href="https://github.com/pstackebrandt"
                            text="Meine GitHub Repositorys"
                            description={`Die Repositorys beinhalten Code zu zahlreichen Übungsaufgaben und Projekten. Obwohl der Großteil öffentlich zugänglich ist, fehlt oft der nötige Kontext, um Zweck und Details des Codes vollständig zu erschließen.

                            Für mehrere Repositorys wird GitHub Projects als Planungswerkzeug eingesetzt. Einzelne davon sind öffentlich einsehbar.`}
                        />
                    </li>
                    <li className="double-width">
                        <LinkCard
                            href="https://pstackebrandt.github.io/hacker-stories/"
                            text="Your Hacker Stories"
                            description={`Dieses React-Trainingsprojekt setzt moderne Webtechnologien ein, um Technologie-Nachrichten zu suchen und anzuzeigen. 
                            
                            Die Daten stammen von Hacker News, einer bekannten Plattform für Technologie-Nachrichten und Entwicklerforen.
                            Bei der Implementierung orientierte ich mich an einem Beispielprojekt aus dem Buch "The Road to React" von Robin Wieruch, entwickelte jedoch häufig eigene Lösungen.
                            
                            (React, JavaScript, TypeScript, React Reducer, Error Handling, API-Calls, CSS Modules, SCSS)`}
                        />
                    </li>
                    <li>
                        <LinkCard
                            href="https://pstackebrandt.github.io/gas-costs-app/"
                            text="Fahrtkosten-Rechner"
                            description={`Die App berechnet die Kosten für eine Autofahrt anhand gefahrener Kilometer, des Kraftstoffverbrauchs und des Kraftstoffpreises.
                            
                            (React, JavaScript, TypeScript, Responsive Design, CSS Modules, SCSS)`}
                        />
                    </li>
                    <li className="double-width">
                        <LinkCard
                            href="https://todo-rest-api-spring-boot3.onrender.com/swagger-ui/index.html"
                            text="To-do API mit Spring Boot und Docker"
                            description={`Diese API verwaltet Aufgaben in einer einfachen In-Memory-Liste. Sie validiert Eingaben in einer Serviceklasse und gibt HTTP-Statusmeldungen zurück. Der Link führt auf eine OpenAPI-Seite, die über die Endpunkte informiert.

                            Die Anwendung wurde mit Spring Boot 3 und Java 21 entwickelt. Sie ist mithilfe von Docker auf Amazon Corretto Alpine Linux containerisiert. Da sie kostenlos gehostet wird und das Image 530 MB groß ist, wird die Anwendung nach Inaktivität deaktiviert. Es kann bis zu 50 Sekunden dauern, bis sie wieder verwendbar ist.

                            Als Teil des Entwicklungsprozesses sorgen automatisierte Slice-Tests mit MockMVC sowie versionierte REST-Client-Tests für eine verlässliche Qualitätsprüfung. Dieses Setup veranschaulicht nicht nur einen unkomplizierten Ansatz für REST, sondern auch eine effiziente Containerisierung und einen reibungslosen Bereitstellungsprozess.
                            
                            (Spring Boot 3, Java 21, Docker, OpenAPI, Error Handling, Slice-Tests, REST-Client-Tests, automatische Build- und Dokumentationsupdates)`}
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
                            
                            (React, React Router, SCSS, Responsive Design, automatische Dokumentationsupdates)`}
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
} 