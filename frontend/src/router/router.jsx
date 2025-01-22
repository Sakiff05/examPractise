import Add from "../pages/Add";
import Basket from "../pages/Basket";
import Details from "../pages/Details";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Root from "../pages/Root";

const ROUTES = [
  {
    path: "",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "details/:id",
        element: <Details />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
      {
        path: "add",
        element: <Add />,
      },
    ],
  },
];

export default ROUTES;
