import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Main Screens
import Home from "./screens/Home";
import AboutUs from "./screens/AboutUs";
import ContactUs from "./screens/ContactUs";
import ScheduleFreeConsultation from "./screens/ScheduleFreeConsultation";

// Category Screens
import Dentistry from "./screens/Dentistry";
import Aesthetics from "./screens/Aesthetics";

// Dentistry Sub-screens
import AestheticDentistry from "./screens/dentistry/AestheticDentistry";
import DentalImplants from "./screens/dentistry/DentalImplants";
import SurgicalProcedures from "./screens/dentistry/SurgicalProcedures";
import RestorativeTreatments from "./screens/dentistry/RestorativeTreatments";
import Periodontics from "./screens/dentistry/Periodontics";
import Orthodontics from "./screens/dentistry/Orthodontics";
import DentalTherapy from "./screens/dentistry/DentalTherapy";

// Aesthetics Sub-screens
import FacialAesthetics from "./screens/FacialAesthetics";
import BodyAesthetics from "./screens/BodyAesthetics";
import BreastAesthetics from "./screens/BreastAesthetics";
import GenitalAesthetics from "./screens/GenitalAesthetics";

// Body Aesthetics
import Lift from "./screens/body-aesthetics/Lift";
import Abdominoplasty from "./screens/body-aesthetics/Abdominoplasty";
import Gynecomastia from "./screens/body-aesthetics/Gynecomastia";
import LaserLiposuction from "./screens/body-aesthetics/LaserLiposuction";
import Bbl from "./screens/body-aesthetics/Bbl";

// Facial Aesthetics
import FacialLift from "./screens/facial-aesthetics/LiftList";
import Blepharoplasty from "./screens/facial-aesthetics/Blepharoplasty";
import Rhinoplasty from "./screens/facial-aesthetics/Rhinoplasty";
import ChinImplant from "./screens/facial-aesthetics/ChinImplant";

// Utilities and Components
import ScrollToTop from "./utils/ScrollToTop";
import Layout from "./components/layout/Layout";

import "./App.css";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Layout />
      </>
    ),
    children: [
      // Main Routes
      { path: "/", element: <Home /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/contact-us", element: <ContactUs /> },
      {
        path: "/schedule-free-consultation",
        element: <ScheduleFreeConsultation />,
      },

      // Aesthetics Routes
      { path: "/aesthetics", element: <Aesthetics /> },

      // Body Aesthetics
      { path: "/body-aesthetics", element: <BodyAesthetics /> },
      { path: "/body-aesthetics/lift", element: <Lift /> },
      {
        path: "/body-aesthetics/abdominoplasty",
        element: <Abdominoplasty />,
      },
      {
        path: "/body-aesthetics/gynecomastia",
        element: <Gynecomastia />,
      },
      {
        path: "/body-aesthetics/laser-liposuction",
        element: <LaserLiposuction />,
      },
      { path: "/body-aesthetics/bbl", element: <Bbl /> },

      // Breast Aesthetics
      { path: "/breast-aesthetics", element: <BreastAesthetics /> },

      // Genital Aesthetics
      {
        path: "/genital-aesthetics",
        element: <GenitalAesthetics />,
      },

      // Facial Aesthetics
      { path: "/facial-aesthetics", element: <FacialAesthetics /> },
      { path: "/facial-aesthetics/lift", element: <FacialLift /> },
      {
        path: "/facial-aesthetics/blepharoplasty",
        element: <Blepharoplasty />,
      },
      {
        path: "/facial-aesthetics/rhinoplasty",
        element: <Rhinoplasty />,
      },
      {
        path: "/facial-aesthetics/chin-implant",
        element: <ChinImplant />,
      },

      // Dentistry Routes
      { path: "/dentistry", element: <Dentistry /> },
      {
        path: "/dentistry/aesthetic-dentistry",
        element: <AestheticDentistry />,
      },
      { path: "/dentistry/dental-implants", element: <DentalImplants /> },
      {
        path: "/dentistry/surgical-procedures",
        element: <SurgicalProcedures />,
      },
      {
        path: "/dentistry/restorative-treatments",
        element: <RestorativeTreatments />,
      },
      { path: "/dentistry/periodontics", element: <Periodontics /> },
      { path: "/dentistry/orthodontics", element: <Orthodontics /> },
      { path: "/dentistry/dental-therapy", element: <DentalTherapy /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
