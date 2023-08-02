import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div>
            {/* todo Fehlerbehandlung spezifischer machen. */}
            <h3>Sorry, da lief etwas schief! :D</h3>
            <Link to="/">&lt;&lt; Zurück</Link>
        </div>
    )
}
