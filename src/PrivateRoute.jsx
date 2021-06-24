import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";
import { loginSuccess } from "./features/auth/authSlice";


export function PrivateRoute({ path, ...props }) {

    const dispatch = useDispatch()
    const { isAuth } = useSelector(state => state.login)

    useEffect(() => {
        !isAuth && localStorage.getItem("token") && dispatch(loginSuccess())
    }, [dispatch, isAuth])

    return isAuth ? (
        <Route {...props} path={path} />
    ) : (
        <Navigate state={{ from: path }} replace to="/" />
    );
}