//ReactRouter Imports
import { Outlet } from 'react-router-dom'

export default function ImpressLayout() {

    return (
            <div className="impress-layout">
                <Outlet />
            </div>
    );
}