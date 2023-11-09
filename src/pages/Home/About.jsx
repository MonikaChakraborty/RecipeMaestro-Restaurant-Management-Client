import img from '../../assets/restaurant-interior.jpg'
const About = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="">
                    <h1 className='font-bold text-4xl lg:mb-16 mb-5'>About Us</h1>
                    <p className='font-medium text-lg text-gray-700'>RestaurantMaestro is a comprehensive restaurant management platform that helps restaurants of all sizes succeed. From menu planning and recipe management to inventory control and order processing, RestaurantMaestro has the tools you need to streamline your operations and improve your bottom line.</p>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;