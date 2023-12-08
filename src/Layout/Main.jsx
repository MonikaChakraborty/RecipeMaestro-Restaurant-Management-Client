import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
// import Navbar from "../pages/Shared/Navbar";

const Main = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Outlet></Outlet>
            <Toaster></Toaster>
            <Footer></Footer>
        </div>
    );
};

export default Main;