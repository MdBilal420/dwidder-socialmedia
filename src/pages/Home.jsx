import React from 'react'
import Feed from '../components/feed/Feed'
import Sidebar from '../components/sidebar/Sidebar'
import '../App.css'

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <Feed />
        </div>
    )
}


export default Home