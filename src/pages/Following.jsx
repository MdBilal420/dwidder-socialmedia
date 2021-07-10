import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import { useSelector } from 'react-redux'
import FollowingList from '../components/follow/FollowingList'
import '../App.css'

const Following = () => {
    const { profile } = useSelector(state => state.profile)


    return (
        <div className="container">
            <Sidebar />
            {profile && <FollowingList followingList={profile.following} />}
        </div>
    )
}

export default Following