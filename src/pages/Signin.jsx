import React, { useState } from 'react'
import './pages.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/user/userSlice'
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import { unwrapResult } from '@reduxjs/toolkit';

import TextField from '@material-ui/core/TextField';



const Signin = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { status, error } = useSelector(state => state.user)

    const [formData, setFormData] = useState({ email: "", password: "" })
    const { email, password } = formData


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let result = await dispatch(login(formData))
            unwrapResult(result)
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="login-container">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Log in to Dwidder</h1>
                {error && <Alert severity="error" variant="standard">Incorrect Email/Password</Alert>}

                <label><h3>Email</h3></label>
                <TextField id="outlined-basic" label="Email" variant="outlined" className="input"
                    type="email" name="email" placeholder="Email" value={email} onChange={handleChange}
                />

                <label><h3>Password</h3></label>
                <TextField id="outlined-basic" label="Password" variant="outlined" className="input"
                    type="password" name="password" placeholder="Password" value={password} onChange={handleChange}
                />

                <button type="submit" value="Submit">{status !== 'loading' ? <h3>Submit</h3> : <CircularProgress />}</button>

                <Link style={{ textDecoration: "none", color: "#080808" }} to="/signup"><h4>Sign up for Dwidder</h4></Link>
            </form>
        </div>

    )
}

export default Signin