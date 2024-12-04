import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingPage from "../Components/LoadingPage";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation() ;
    console.log(location);

if (loading) {
        return <LoadingPage></LoadingPage>;
    }

    if (user && user.email) {
        return children;
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>

};

export default PrivateRoute;