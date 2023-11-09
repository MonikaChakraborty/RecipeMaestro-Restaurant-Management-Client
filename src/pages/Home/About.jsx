import img from '../../assets/restaurant-interior.jpg'
const About = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="">
                    <h1>About Us</h1>
                    <p>RestaurantMaestro is a comprehensive restaurant management platform that helps restaurants of all sizes succeed. From menu planning and recipe management to inventory control and order processing, RestaurantMaestro has the tools you need to streamline your operations and improve your bottom line.</p>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;