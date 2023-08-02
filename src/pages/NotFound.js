import { Link } from "react-router-dom"

/**
 * Wird aufgerufen, wenn eine URL-Anfrage hereinkommt, die es nicht gibt.
 * Definiert in der App.js Routerkonfiguration
 * @returns 
 */
export default function NotFound() {
    return (
        <div className="not-found">
            <h2>404: Seite nicht gefunden</h2>
            <p>Das sind nicht die Druiden, die Ihr Sucht. Geht <Link to="/">nach Hause telefonieren</Link> :D</p>
        </div>
    )
}