import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();


    // console.log(location.pathname);
    
    if(loading) {
        return <span className="w-[200px] loading loading-spinner text-neutral"></span>

    }

    if(user){
        return children;
    }


    return <Navigate state={location.pathname} to="/login"></Navigate>;
};



export default PrivateRoute;