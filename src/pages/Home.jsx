import React from 'react'
import Feed from '../components/feed/Feed'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../features/posts/postsSlice'
import { getProfile } from '../features/profile/profileSlice';
import Sidebar from '../components/sidebar/Sidebar'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { removeUser } from '../features/user/userSlice'
import { removeProfile } from '../features/profile/profileSlice'
const Home = () => {


    const { user } = useSelector(state => state.user)
    const posts = useSelector(state => state.posts)
    const { profile } = useSelector(state => state.profile)
    const dispatch = useDispatch()

    console.log("pro", profile)

    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            try {
                (async () => {
                    await dispatch(getPosts())
                })()
            } catch (error) {
                console.error(error);
            }
        } else {
            dispatch(removeUser())
            dispatch(removeProfile())
            localStorage.removeItem('user')
            navigate("/login")
        }
    }, [dispatch, user, navigate,])

    useEffect(() => {
        if (!profile) {
            (async () => {
                await dispatch(getProfile(user._id))
            })()
        }

    }, [dispatch, user, profile])

    return (
        <div className="container">
            {user && <Sidebar />}
            {user && <Feed posts={posts} />}
        </div>
    )
}


export default Home