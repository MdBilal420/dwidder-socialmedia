import React, { useEffect } from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Profile from '../components/profile/Profile'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "../App.css"

const Timeline = () => {

    const { user } = useSelector(state => state.user)


    return (
        <div className="container">
            {user && <Sidebar />}
            {user && <Profile />}
        </div>
    )
}


export default Timeline