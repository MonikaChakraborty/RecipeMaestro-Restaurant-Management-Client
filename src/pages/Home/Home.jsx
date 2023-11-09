import About from "./About";
import Banner from "./Banner";
import FAQ from "./FAQ";
import TopFood from "./TopFood/TopFood";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopFood></TopFood>
            <About></About>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;