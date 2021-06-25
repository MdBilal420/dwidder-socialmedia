import React from 'react'
import Post from '../post/Post'
import Postbox from '../postbox/Postbox'

import './feed.css'

const Feed = ({ posts }) => {

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <Postbox />
            {
                posts.posts.map((post) => {
                    return <Post post={post} key={post._id} />
                })
            }

        </div>
    )
}


export default Feed