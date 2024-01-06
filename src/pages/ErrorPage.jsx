import { Link } from "react-router-dom";
// import img from '../assets/404.jpg'
import animation from './404.json'
import Lottie from "lottie-react";

const ErrorPage = () => {
    return (
        <div className="flex flex-col ">
            <Link className="flex justify-center items-center -mt-2" to='/'><button className="btn relative font-medium border-yellow-900 bg-transparent normal-case text-gray-800  transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-yellow-900 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 rounded">Back to Home</button></Link>
            <div className="">
            {/* <img className="h-[80vh]" src={img} alt="" /> */}
            <Lottie className="h-screen cursor-pointer" animationData={animation}></Lottie>
            
        </div>
        </div>
    );
};

export default ErrorPage;