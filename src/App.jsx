import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "./screens/Home";
import Layout from "./components/layout/Layout";
import AboutUs from "./screens/AboutUs";
import ContactUs from "./screens/ContactUs";
// import GastricSleeve from "./screens/GastricSleeve";
import ScheduleFreeConsultation from "./screens/ScheduleFreeConsultation";
import BodyAesthetics from "./screens/BodyAesthetics";
import GenitalAesthetics from "./screens/GenitalAesthetics";
import BreastAesthetics from "./screens/BreastAesthetics";
import FacialAesthetics from "./screens/FacialAesthetics";
import Dentistry from "./screens/Dentistry";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap pages inside the Layout
    children: [
      { path: "/", element: <Home /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/body-aesthetics", element: <BodyAesthetics /> },
      { path: "/genital-aesthetics", element: <GenitalAesthetics /> },
      { path: "/breast-aesthetics", element: <BreastAesthetics /> },
      { path: "/facial-aesthetics", element: <FacialAesthetics /> },
      { path: "/dentistry", element: <Dentistry /> },

      {
        path: "/schedule-free-consultation",
        element: <ScheduleFreeConsultation />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
