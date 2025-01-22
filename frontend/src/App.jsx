import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import ROUTES from "./router/router";

const router = createBrowserRouter(ROUTES);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
