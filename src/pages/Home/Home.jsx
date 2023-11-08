import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import TopFood from "./TopFood/TopFood";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <TopFood></TopFood>
            <Footer></Footer>
        </div>
    );
};

export default Home;