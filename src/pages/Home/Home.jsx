import Navbar from "../Shared/Navbar";
import About from "./About";
import Banner from "./Banner";
import FAQ from "./FAQ";
// import TopFood from "./TopFood/TopFood";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            {/* <TopFood></TopFood> */}
            <About></About>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;