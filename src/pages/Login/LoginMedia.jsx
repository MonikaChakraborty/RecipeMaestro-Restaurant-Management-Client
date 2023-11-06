import { FcGoogle } from "react-icons/fc";
// import { BsGithub } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const LoginMedia = () => {

    const {user, googleLogin} = useContext(AuthContext);
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
      <div className="flex justify-around mb-5">
        

        <button onClick={() => handleLoginMedia (googleLogin)}
         
          className="btn normal-case"
        >
          <FcGoogle></FcGoogle>Google
        </button>

        {/* <button
         
          className="btn normal-case"
        >
          <BsGithub></BsGithub>GitHub
        </button> */}
      </div>
    </div>
  );
};

export default LoginMedia;
