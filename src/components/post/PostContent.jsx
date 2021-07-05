import React from 'react'
import './post.css'
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

const PostContent = ({ post }) => {
    return (
        <div className="post__header">
            <div className="post__headerText">
                <h3>
                    {post.username.toUpperCase()}
                    <span className="post__headerSpecial">
                        <VerifiedUserIcon className="post__badge" /> @{post.username}
                    </span>
                </h3>
            </div>
            <div className="post__headerDescription">
                <p>{post.text}</p>
            </div>
        </div>
    )
}

export default PostContent