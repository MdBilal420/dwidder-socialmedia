
import { Route, Navigate } from "react-router-dom";



export function PrivateRoute({ path, ...props }) {

    return localStorage.getItem('user') ? (
        <Route {...props} path={path} />
    ) : (
        <Navigate state={{ from: path }} replace to="/login" />
    );
}