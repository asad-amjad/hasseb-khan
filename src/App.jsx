import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "./screens/Home";
import Layout from "./components/layout/Layout";
import AboutUs from "./screens/AboutUs";
import ContactUs from "./screens/ContactUs";
import ScheduleFreeConsultation from "./screens/ScheduleFreeConsultation";
import BodyAesthetics from "./screens/BodyAesthetics";
import GenitalAesthetics from "./screens/GenitalAesthetics";
import BreastAesthetics from "./screens/BreastAesthetics";
import FacialAesthetics from "./screens/FacialAesthetics";
import ScrollToTop from "./utils/ScrollToTop";

// Dentistry
import Dentistry from "./screens/dentistry";
import AestheticDentistry from "./screens/dentistry/AestheticDentistry";
import DentalImplants from "./screens/dentistry/DentalImplants";
import SurgicalProcedures from "./screens/dentistry/SurgicalProcedures";
import RestorativeTreatments from "./screens/dentistry/RestorativeTreatments";
import Periodontics from "./screens/dentistry/Periodontics";
import Orthodontics from "./screens/dentistry/Orthodontics";
import DentalTherapy from "./screens/dentistry/DentalTherapy";


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
      { path: "/", element: <Home /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/body-aesthetics", element: <BodyAesthetics /> },
      { path: "/genital-aesthetic", element: <GenitalAesthetics /> },
      { path: "/breast-aesthetics", element: <BreastAesthetics /> },
      { path: "/facial-aesthetics", element: <FacialAesthetics /> },
      { path: "/dentistry", element: <Dentistry /> },
      { path: "/dentistry/aesthetic-dentistry", element: <AestheticDentistry /> },
      { path: "/dentistry/dental-implants", element: <DentalImplants /> },
      { path: "/dentistry/surgical-procedures", element: <SurgicalProcedures /> },
      { path: "/dentistry/restorative-treatments", element: <RestorativeTreatments /> },
      { path: "/dentistry/periodontics", element: <Periodontics /> },
      { path: "/dentistry/orthodontics", element: <Orthodontics /> },
      { path: "/dentistry/dental-therapy", element: <DentalTherapy /> },
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
