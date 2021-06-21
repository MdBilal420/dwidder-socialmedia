import React from 'react'
import { Link } from 'react-router-dom';
import './pages.css'

const Signup = () => {

    return (
        <div className="login-container">
            <form className="form">
                <h1 style={{ color: "#080808", marginBottom: "2rem" }}>Sign up to Dwidder</h1>
                <label style={{ color: "#080808" }}><h3>Username</h3></label>
                <input type="text" placeholder="Username" />
                <label style={{ color: "#080808" }}><h3>Email</h3></label>
                <input type="text" placeholder="Email" />

                <label style={{ color: "#080808" }}><h3>Password</h3></label>
                <input type="text" placeholder="Email" />

                <label style={{ color: "#080808" }}><h3>Confirm Password</h3></label>
                <input type="text" placeholder="Confirm Password" />

                <button type="submit" value="Submit"><h2>Submit</h2></button>
                <Link style={{ textDecoration: "none", color: "#080808" }} to="/"><h4>Sign in on Dwidder</h4></Link>
            </form>
        </div>
    )
}

export default Signup