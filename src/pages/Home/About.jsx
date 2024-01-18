import box1 from "../../assets/box1.jpg";
import box2 from "../../assets/box2.jpg";
import box3 from "../../assets/box3.jpg";
import box4 from "../../assets/box4-3.jpg";
import box5 from "../../assets/box-5.jpg";
import box6 from "../../assets/box6-1.jpg";
import box7 from "../../assets/box-7.jpg";
import middleBox from "../../assets/middleBox.jpg";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'

const About = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className="max-w-screen-xl mx-auto ">
      <div className="flex gap-1 h-[80vh]">
        {/* Left Frame */}
        <div className="flex flex-col gap-1 w-[30%] h-[80vh] frame-1 text-white">
          <div className="grid grid-cols-2 gap-1 h-[35vh]">
            <img
              className="h-[35vh] object-cover"
              src={box1}
              alt=""
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            />

            <img
              className="h-[35vh] object-cover"
              src={box2}
              alt=""
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            />
          </div>

          <div className=" gap-1 grid grid-cols-3 h-[45vh]">
            <div className="col-span-2 h-[45vh]">
              <img
                className="h-[44.5vh] object-cover"
                src={box3}
                alt=""
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              />
            </div>

            <img
              className="h-[44.5vh] object-cover"
              src={box4}
              alt=""
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            />
          </div>
        </div>

        {/* Middle Frame */}
        <div className="w-[40%] h-[80vh] relative frame-2 text-white" data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000">
          <img
            className="h-[80vh] w-full object-cover"
            src={middleBox}
            alt="" 
          />

          <div className="absolute inset-0 bg-black opacity-60"></div>

          <div className="absolute inset-0 text-center mt-3 lg:mt-12">
            <h1 className="font-bold text-base md:text-xl lg:text-4xl">
              About Us
            </h1>

            <p className="font-medium text-sm lg:text-lg hidden md:block mt-4 lg:mt-16">
              RestaurantMaestro is a comprehensive restaurant management
              platform that helps restaurants of all sizes succeed. From menu
              planning and recipe management to inventory control and order
              processing, RestaurantMaestro has the tools you need to streamline
              your operations and improve your bottom line.
            </p>
            <p className="font-medium text-sm mt-3 md:hidden lg:hidden">
              RestaurantMaestro is a comprehensive restaurant management
              platform that helps restaurants of all sizes succeed.
            </p>
          </div>
        </div>

        {/* Right Frame */}
        <div className="w-[30%] frame-3  text-white">
          <div className="grid grid-cols-2 gap-1">
            <div className="h-[80vh]">
              <img
                className="h-[80vh] object-cover"
                src={box5}
                alt=""
                data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              />
            </div>

            <div className="flex flex-col gap-1 h-[80vh]">
              <img
                className="h-[40vh] object-cover"
                src={box6}
                alt=""
                data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              />
              <img
                className="h-[40vh] object-cover"
                src={box7}
                alt=""
                data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
