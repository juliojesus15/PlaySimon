import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const PublicRoute = ( { mode } ) => {        
    return (mode!=null) ? <Navigate to={mode} /> : <Outlet />;
}