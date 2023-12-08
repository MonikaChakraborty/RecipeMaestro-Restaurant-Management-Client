// import Navbar from "../Shared/Navbar";
import login from "../../assets/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, handleUpdateProfile } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // getting the field values
    const name = event.target.name.value;
    const email = event.target.email.value;
    const photo = event.target.photo.value;
    const password = event.target.password.value;

    const user = {
      name,
      email,
      photo,
      password,
    };

    // console.log(name, email, password);

    try {
      // Validation
      if (password.length < 6) {
        throw new Error("The password is less than 6 characters");
      } else if (!/[A-Z]/.test(password)) {
        throw new Error("The password does not have a capital letter");
      } else if (!/[!@#$%^&*]/.test(password)) {
        throw new Error("The password does not have a special character");
      }

      // Create a new user
      const userCredential = await createUser(email, password);

      // Update user profile
      await handleUpdateProfile(name, photo);
      toast.success("Registration Successful");

      // navigate user after register
      navigate("/");
    } catch (error) {
      // Display error toast
      toast.error(error.message);
      event.target.reset();
    }

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      {/* <Navbar></Navbar> */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="">
            <img className="w-96 h-96" src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-3xl font-bold text-center">Register now!</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
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
                    value="Sign Up"
                  />
                </div>
              </form>
              <p className="my-4 text-center">
                Already Have an account?{" "}
                <Link to="/login" className="text-yellow-900 font-bold">
                  Login Now!
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
