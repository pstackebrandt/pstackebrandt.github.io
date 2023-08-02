//ReactRouter Imports
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/app.css';


//Layouts
import RootLayout from "../layouts/RootLayout";
import ImpressLayout from "../layouts/ImpressLayout";

// Pages
import Impress from '../pages/Impress';
import Welcome from "../pages/Welcome";

import Error from "../pages/errors/Error";
import NotFound from "../pages/NotFound";

/*
* Welcome == Hauptseite
* NotFound == Wenn eine URL angefragt wird die nicht existiert wird diese Seite aufgerufen.
* errors == Error wird immer dann aufgerufen wenn ein Servefehler auftritt
* ImpressLayout == Impressum, ggf. später auch Datenschutz
 */
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<Error />}>
      <Route index element={<Welcome />} />
            
      <Route path="impress" element={<ImpressLayout />}>
        <Route index element={<Impress />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
