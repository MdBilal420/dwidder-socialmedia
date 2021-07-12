import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Profile from '../components/profile/Profile'
import { useSelector } from 'react-redux'
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