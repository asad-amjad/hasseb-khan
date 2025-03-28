import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './App.css'
import Page1 from "./screens/Page1";

function App() {
  const routes = createBrowserRouter([{ path: "/", element: <Page1 /> }]);

  return <RouterProvider router={routes} />;
}

export default App;
