import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './pages.css';
import CircularProgress from '@material-ui/core/CircularProgress';

import TextField from '@material-ui/core/TextField';

const Signup = () => {

    const [formData, setFormData] = useState({ username: "", email: "", password: "" })
    const { username, email, password } = formData
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleChnage = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            await axios.post('http://localhost:5000/api/users/', formData)
            setLoading(false)
            navigate("/login")
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="login-container">
            <form className="form" onSubmit={onSubmit}>
                <h1 style={{ color: "#080808", marginBottom: "2rem" }}>Sign up to Dwidder</h1>
                <label><h3>Username</h3></label>
                <TextField id="outlined-basic" label="Username" variant="outlined" className="input"
                    type="text" placeholder="Username" name="username" value={username} onChange={handleChnage}
                />

                <label><h3>Email</h3></label>
                <TextField id="outlined-basic" label="Email" variant="outlined" className="input"
                    type="text" placeholder="Email" name="email" value={email} onChange={handleChnage}
                />

                <label><h3>Password</h3></label>
                <TextField id="outlined-basic" label="Password" variant="outlined" className="input"
                    type="password" placeholder="Password" name="password" value={password} onChange={handleChnage}
                />

                <button type="submit" value="Submit">{!loading ? <h2>Submit</h2> : <CircularProgress />}</button>
                <Link style={{ textDecoration: "none", color: "#080808" }} to="/"><h4>Sign in on Dwidder</h4></Link>
            </form>
        </div>
    )
}

export default Signup