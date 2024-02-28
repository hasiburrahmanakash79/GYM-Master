import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/HomePage/Home/Home";
import Main from "../Layouts/Main";
import About from "../Pages/About/About";
import Classes from "../Pages/ClassPage/Classes";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import PhotoGallery from "../Pages/PhotoGallery/PhotoGallery";
import Login from "../Pages/RegistrationPage/Login/Login";
import SignUp from "../Pages/RegistrationPage/SignUp/SignUp";

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
          path: "/gallery",
          element: <PhotoGallery/>
        },
        {
          path: "/class",
          element: <Classes/>
        },
        {
          path: "/blog",
          element: <Blog/>
        },
        {
          path: "/contact",
          element: <Contact/>
        }
    ]
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signUp",
    element: <SignUp/>
  }
]);
export default router;
