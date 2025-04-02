import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

// Main Screens
import Home from "./screens/Home";
import AboutUs from "./screens/AboutUs";
import ContactUs from "./screens/ContactUs";
import ScheduleFreeConsultation from "./screens/ScheduleFreeConsultation";

// Category Screens
import Dentistry from "./screens/Dentistry.jsx";
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
import FacialAesthetics from "./screens/aesthetics/FacialAesthetics.jsx";
import BodyAesthetics from "./screens/aesthetics/BodyAesthetics.jsx";
import BreastAesthetics from "./screens/aesthetics/BreastAesthetics.jsx";
import GenitalAesthetics from "./screens/aesthetics/GenitalAesthetics.jsx";

// Body Aesthetics
import Lift from "./screens/aesthetics/body-aesthetics/Lift.jsx";
import Abdominoplasty from "./screens/aesthetics/body-aesthetics/abdominoplasty.jsx";
import Gynecomastia from "./screens/aesthetics/body-aesthetics/Gynecomastia.jsx";
import LaserLiposuction from "./screens/aesthetics/body-aesthetics/LaserLiposuction.jsx";
import Bbl from "./screens/aesthetics/body-aesthetics/Bbl.jsx";

// Facial Aesthetics
import FacialLift from "./screens/aesthetics/facial-aesthetics/LiftList.jsx";
import Blepharoplasty from "./screens/aesthetics/facial-aesthetics/Blepharoplasty.jsx";
import Rhinoplasty from "./screens/aesthetics/facial-aesthetics/Rhinoplasty.jsx";
import ChinImplant from "./screens/aesthetics/facial-aesthetics/ChinImplant.jsx";

// Utilities and Components
import ScrollToTop from "./utils/ScrollToTop";
import Layout from "./components/layout/Layout";

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
      { path: "/aesthetics/body-aesthetics", element: <BodyAesthetics /> },
      { path: "/aesthetics/body-aesthetics/lift", element: <Lift /> },
      { path: "/aesthetics/body-aesthetics/abdominoplasty", element: <Abdominoplasty /> },
      { path: "/aesthetics/body-aesthetics/gynecomastia", element: <Gynecomastia /> },
      { path: "/aesthetics/body-aesthetics/laser-liposuction", element: <LaserLiposuction /> },
      { path: "/aesthetics/body-aesthetics/bbl", element: <Bbl /> },
      
      // Breast Aesthetics
      { path: "/aesthetics/breast-aesthetics", element: <BreastAesthetics /> },
      
      // Genital Aesthetics
      { path: "/aesthetics/genital-aesthetics", element: <GenitalAesthetics /> },
      
      // Facial Aesthetics
      { path: "/aesthetics/facial-aesthetics", element: <FacialAesthetics /> },
      { path: "/aesthetics/facial-aesthetics/lift", element: <FacialLift /> },
      { path: "/aesthetics/facial-aesthetics/blepharoplasty", element: <Blepharoplasty /> },
      { path: "/aesthetics/facial-aesthetics/rhinoplasty", element: <Rhinoplasty /> },
      { path: "/aesthetics/facial-aesthetics/chin-implant", element: <ChinImplant /> },
      
      // Dentistry Routes
      { path: "/dentistry", element: <Dentistry /> },
      { path: "/dentistry/aesthetic-dentistry", element: <AestheticDentistry /> },
      { path: "/dentistry/dental-implants", element: <DentalImplants /> },
      { path: "/dentistry/surgical-procedures", element: <SurgicalProcedures /> },
      { path: "/dentistry/restorative-treatments", element: <RestorativeTreatments /> },
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