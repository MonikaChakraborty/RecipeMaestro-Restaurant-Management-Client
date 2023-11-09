import img from '../../assets/restaurant-interior.jpg'
const About = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="">
                    <h1>About Us</h1>
                    <p></p>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;