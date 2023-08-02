// file: RootLayout.js

//ReactRouter Imports
import { Outlet } from 'react-router-dom'

// styles
import 'bootstrap/dist/css/bootstrap.min.css';

import TopNav from '../pages/top-nav';
import BottomNav from '../pages/bottom-nav';

/**
 * Repräsentiert das Hauptlayout,
 * welches alle anderen Layouts
 * passend importiert und mithilfe von react-router
 * sicherstellt, dass die Inhalte anstelle
 * des Outlet Tags angezeigt werden.
 */
export default function RootLayout() {

    function Header() {

        return (
            <header className="text-center">
                <TopNav />
            </header>
        );
    }

    function MainContent() {
        return (
            <>
                <main className="text-center">
                  

                    <Outlet />
                </main>
            </>
        );
    }

    function Footer() {
        return (
            <footer className="text-center fixed-bottom">
                <BottomNav />
            </footer>
        );
    }

    return (
        <div className="root-layout">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}
