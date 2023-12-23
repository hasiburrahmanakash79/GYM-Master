import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/HomePage/Home/Home";
import Main from "../Layouts/Main";
import About from "../Pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/about",
          element: <About/>
        }
    ]
  },
]);

export default router;
