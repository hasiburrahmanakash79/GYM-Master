import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/HomePage/Home/Home";
import Main from "../Layouts/Main";
import About from "../Pages/About/About";
import Classes from "../Pages/ClassPage/Classes";
import Blog from "../Pages/Blog/Blog";

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
        },
        {
          path: "/class",
          element: <Classes/>
        }
        ,
        {
          path: "/blog",
          element: <Blog/>
        },
        {
          path: "/class",
          element: <Classes/>
        }
    ]
  },
]);

export default router;
