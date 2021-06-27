import React from 'react'
import ProfileHeader from './ProfileHeader'
// import Post from '../post/Post'
import './profile.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Profile = () => {

    const { user } = useSelector(state => state.user)
    const navigate = useNavigate()

    if (!user) {
        localStorage.removeItem('user')
        navigate("/login")
    }


    return (
        <div className="profile">
            <ProfileHeader />

        </div>
    )
}

export default Profile