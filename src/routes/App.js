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
import Projects from "../pages/Projects";
import Welcome from "../pages/Welcome";

/*
* Welcome == Main page
* Projects == Dedicated project page
* NotFound == This page is displayed when a URL is requested that doesn't exist
* errors == Error is always called when a server error occurs
* ImpressLayout == Imprint, possibly privacy policy later
 */
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<Error />}>
      <Route index element={<Welcome />} />
      <Route path="projects" element={<Projects />} />
            
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
