import React from 'react'
import './pages.css'
import { Link } from 'react-router-dom';

const Signin = () => {

    return (
        <div className="login-container">
            <form className="form">
                <h1 style={{ color: "#080808", marginBottom: "2rem" }}>Log in to Dwidder</h1>
                <label style={{ color: "#080808" }}><h3>Email</h3></label>
                <input type="text" placeholder="Email" />

                <label style={{ color: "#080808" }}><h3>Password</h3></label>
                <input type="text" placeholder="Password" />

                <button type="submit" value="Submit"><h3>Submit</h3></button>
                <Link style={{ textDecoration: "none", color: "#080808" }} to="/signup"><h4>Sign up for Dwidder</h4></Link>
            </form>
        </div>

    )
}

export default Signin