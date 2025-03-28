import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "./screens/Home";
import Layout from "./components/layout/Layout";
import AboutUs from "./screens/AboutUs";
import ContactUs from "./screens/ContactUs";
import GastricSleeve from "./screens/GastricSleeve";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap pages inside the Layout
    children: [
      { path: "/", element: <Home /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/gastric-sleeve", element: <GastricSleeve /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
