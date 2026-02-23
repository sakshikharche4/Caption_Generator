import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Card from "../components/Card";
import Hero from "../components/Hero.Jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    
    children: [
      {
        path: "generate",
        element: <Card />,
      },
    ],
  },
]);

export default router;