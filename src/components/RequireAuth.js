import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const RequireAuth = (props) => {
    const login = props.login
    const { auth } = useAuth();
    const location = useLocation();
    const role = props.allowedRoles

    return (
        role.includes( auth?.role )
            ? <Outlet />
            : auth?.accessToken //changed from user to accessToken to persist login after refresh
                ? <Navigate to="/unauthorized" state={{ from: location }} replace /> //replace attribute for allow  user to back in path
                : <Navigate to={`/${login}` }state={{ from: location }} replace />
    );
}

export default RequireAuth;