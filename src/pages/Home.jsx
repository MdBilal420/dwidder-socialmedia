import React from 'react'
import axios from 'axios'
import Feed from '../components/feed/Feed'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../features/posts/postsSlice'
import { getProfile } from '../features/profile/profileSlice';
import Sidebar from '../components/sidebar/Sidebar'
import '../App.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {


    const { user } = useSelector(state => state.user)
    const posts = useSelector(state => state.posts)
    const { profile } = useSelector(state => state.profile)

    console.log(profile)

    const navigate = useNavigate()

    const dispatch = useDispatch()

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
            localStorage.removeItem('user')
            navigate("/login")
        }
    }, [dispatch, user, navigate,])

    useEffect(() => {
        if (!profile) {
            try {
                (async () => {
                    const res = await axios.post('https://dwidder-backend.herokuapp.com/api/profile', {
                        bio: "Add Bio",
                        birthdate: "01-01-1990",
                        location: "unknown",
                        website: "https://"
                    })
                    console.log(res.data)
                    await dispatch(getProfile(user._id))
                })()
            } catch (error) {
                console.error(error)
            }
        }
    }, [dispatch, profile, user])

    return (
        <div className="container">
            {user && <Sidebar />}
            {user && <Feed posts={posts} />}
        </div>
    )
}


export default Home