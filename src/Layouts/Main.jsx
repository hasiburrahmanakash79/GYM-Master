import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Nav/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-200px)]">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
