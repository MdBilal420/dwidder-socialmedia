import React from 'react'
import './post.css'
import { Avatar } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PostContent from './PostContent';



const Post = ({ post }) => {
    console.log(post)

    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar style={{ backgroundColor: "blue" }}>{post.username[0].toUpperCase()}</Avatar>
            </div>
            <div className="post__body">
                <PostContent post={post} />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
}


export default Post