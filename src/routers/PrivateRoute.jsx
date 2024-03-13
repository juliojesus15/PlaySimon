import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = ({ mode, path}) => {     
    if (mode === null) {
        return <Navigate to="/"/>;
    } 
    else if (mode === path) {
        return <Outlet />;
    } 
    else {        
        const redirectPath = "/".concat(mode);
        return <Navigate to={ redirectPath }/>;
    }
}
