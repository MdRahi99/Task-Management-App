import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Dashboard from "../Components/Dashboard/Dashboard";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ]);

export default router;