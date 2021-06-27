import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Profile from '../components/profile/Profile'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Timeline = () => {

    const { user } = useSelector(state => state.user)

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('user')
        navigate('/login')
    }

    if (!user) {
        logout()
    }

    return (
        <div className="home">
            <Sidebar />
            <Profile />
        </div>
    )
}


export default Timeline