import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();


    // console.log(location.pathname);
    
    if(loading) {
        return <div className="flex justify-center  "><span className="mt-48 w-[200px] loading loading-spinner text-neutral"></span></div>

    }

    if(user){
        return children;
    }


    return <Navigate state={location.pathname} to="/login"></Navigate>;
};




export default PrivateRoute;