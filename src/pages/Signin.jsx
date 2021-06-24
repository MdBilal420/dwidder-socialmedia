import React, { useState, useEffect } from 'react'
import './pages.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginPending, loginSuccess, loginFail } from '../features/auth/authSlice';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import { userLogin } from '../api/userApi';
import { getUserProfile } from '../features/user/userAction';


const Signin = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { isLoading, error } = useSelector(state => state.login)

    useEffect(() => {
        localStorage.getItem("token") && navigate('/home')
    }, [navigate])


    const [user, setUser] = useState({ email: "james@bond.com", password: "123456" })
    const { email, password } = user


    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email, password);

        dispatch(loginPending())
        try {
            const isAuth = await userLogin({ email, password })
            console.log(isAuth)
            if (isAuth.status === 200) {
                dispatch(loginSuccess())
                dispatch(getUserProfile())
                navigate('/home')
            }

        } catch (error) {
            console.log(error);
            dispatch(loginFail("Login Failed"))
        }
    }

    return (
        <div className="login-container">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Log in to Dwidder</h1>
                {error && <Alert severity="error" variant="standard">{error}</Alert>}
                <label><h3>Email</h3></label>
                <input type="email" name="email" placeholder="Email" value={email} onChange={handleChange} />

                <label><h3>Password</h3></label>
                <input type="text" name="password" placeholder="Password" value={password} onChange={handleChange} />

                <button type="submit" value="Submit">{!isLoading ? <h3>Submit</h3> : <CircularProgress />}</button>

                <Link style={{ textDecoration: "none", color: "#080808" }} to="/signup"><h4>Sign up for Dwidder</h4></Link>
            </form>
        </div>

    )
}

export default Signin