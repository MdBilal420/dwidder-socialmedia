import React from 'react'
import Feed from '../components/feed/Feed'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../features/posts/postsSlice'
import Sidebar from '../components/sidebar/Sidebar'
import '../App.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {


    const { user } = useSelector(state => state.user)
    const posts = useSelector(state => state.posts)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    useEffect(() => {
        if (user) {
            (async () => {
                await dispatch(getPosts())
            })()
        } else {
            localStorage.removeItem('user')
            navigate("/login")
        }
    }, [dispatch, user, navigate])

    return (
        <div className="home">
            <Sidebar />
            <Feed posts={posts} />
        </div>
    )
}


export default Home