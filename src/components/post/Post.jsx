import React from 'react'
import './post.css'
import { Avatar } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PostContent from './PostContent';



const Post = ({ post }) => {

    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src='https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' />
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