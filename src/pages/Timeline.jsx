import React, { useEffect } from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Profile from '../components/profile/Profile'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Timeline = () => {

    const { user } = useSelector(state => state.user)

    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            localStorage.removeItem('user')
            navigate('/login')
        }
    }, [navigate, user])


    return (
        <div className="home">
            {user && <Sidebar />}
            <Profile />
        </div>
    )
}


export default Timeline