import { Toaster } from "react-hot-toast";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
// import Navbar from "../pages/Shared/Navbar";

const Main = () => {
    const location = useLocation();
    console.log(location);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Outlet></Outlet>
            <Toaster></Toaster>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;