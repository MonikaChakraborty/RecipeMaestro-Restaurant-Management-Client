import { Link } from "react-router-dom";
import img from '../assets/404.jpg'

const ErrorPage = () => {
    return (
        <div className="max-w-3xl mx-auto">
            <div className="flex flex-col  justify-center items-center">
            <img className="h-[80vh]" src={img} alt="" />
            <Link to='/'><button className="btn">Back to Home</button></Link>
        </div>
        </div>
    );
};

export default ErrorPage;