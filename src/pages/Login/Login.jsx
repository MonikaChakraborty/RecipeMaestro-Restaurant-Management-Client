// import Navbar from "../Shared/Navbar";
// import login from "../../assets/login.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginMedia from "./LoginMedia";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import login from './login.json'
import Lottie from "lottie-react";

const Login = () => {

    const {signIn} = useAuth();
    const location = useLocation();const navigate = useNavigate();

     const handleSubmit = event => {
        event.preventDefault();

        // getting the field values
        const email = event.target.email.value;
        const password = event.target.password.value;

         // creating a new user
         signIn(email, password)
         .then(res => {
          toast.success('Login Successful');
    
          // navigate after login
          navigate(location?.state ? location.state : '/')
        })

        .catch(error => {

          toast.error('email or password does not match');
          // console.log(error);
        })
         
    }



  return (
    <div>
      {/* <Navbar></Navbar> */}
      <div className="hero bg-base-200 mt-20">
        <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center">
          <div className="" data-aos="fade-left">
            {/* <img className="w-96 h-96" src={login} alt="" /> */}
            <Lottie animationData={login}></Lottie>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" data-aos="fade-right">
            <div className="card-body">
              <h1 className="text-3xl font-bold text-center">Login now!</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email" name="email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password" name="password"
                    placeholder="Password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn bg-yellow-900 hover:bg-yellow-950 text-gray-200"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <p className="my-4 text-center">New here? <Link className="text-yellow-900 font-bold" to="/register">Sign Up Now!</Link></p>
              <LoginMedia></LoginMedia>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
