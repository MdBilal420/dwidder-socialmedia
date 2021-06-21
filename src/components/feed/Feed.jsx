import React from 'react'
import Postbox from '../postbox/Postbox'
import Post from '../post/Post'
import './feed.css'

const Feed = () => {
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <Postbox />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post /><Post /><Post />
            <Post />

            <Post /><Post />

        </div>
    )
}


export default Feed