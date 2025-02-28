//ReactRouter Imports
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/app.scss';

//Layouts
import ImpressLayout from "../layouts/ImpressLayout";
import RootLayout from "../layouts/RootLayout";
// Pages
import Error from "../pages/errors/Error";
import Impress from '../pages/Impress';
import NotFound from "../pages/NotFound";
import Welcome from "../pages/Welcome";

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
