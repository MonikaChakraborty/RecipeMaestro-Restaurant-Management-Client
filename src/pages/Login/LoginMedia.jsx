import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const LoginMedia = () => {

    const {user, googleLogin, githubLogin} = useContext(AuthContext);
    console.log(user);

    const handleLoginMedia = (media) => {
        media()
        .then(res => console.log(res))
        .catch(error => console.log(error))

    }

  return (
    <div>
      <div className="divider">
        <h1>Continue with</h1>
      </div>
      <div className="flex justify-evenly mb-5 ">
        

        <button onClick={() => handleLoginMedia (googleLogin)}
          className="btn relative font-medium border-yellow-900 bg-transparent normal-case text-gray-800  transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-yellow-900 before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-x-100 rounded"
        >
          <FcGoogle></FcGoogle>Google
        </button>

        <button onClick={() => handleLoginMedia(githubLogin)}  className="btn relative font-medium border-yellow-900 bg-transparent normal-case text-gray-800  transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-yellow-900 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 rounded"><BsGithub></BsGithub>GitHub</button>

      </div>
    </div>
  );
};

export default LoginMedia;
