import React from 'react'
import ProfileHeader from './ProfileHeader'
// import Post from '../post/Post'
import './profile.css'
import { useSelector } from 'react-redux'
import Post from '../post/Post'


const Profile = () => {

    const { profile, posts } = useSelector(state => state.profile)


    return (
        <div className="profile">
            {profile && <ProfileHeader profile={profile} />}
            {
                posts && posts.map((post) => <Post post={post} key={post._id} />)
            }

        </div>
    )
}

export default Profile