import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import FollowersList from '../components/follow/FollowersList'
import { useSelector } from 'react-redux'
import '../App.css'

const Followers = () => {
    const { profile } = useSelector(state => state.profile)

    return (
        <div className="container">
            <Sidebar />
            {profile && <FollowersList followersList={profile.followers} />}
        </div>
    )
}


export default Followers;