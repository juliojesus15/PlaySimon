import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = ( { isLoggedIn } ) => {
    return isLoggedIn ? <Navigate to={"simon"} /> : <Outlet />;
}