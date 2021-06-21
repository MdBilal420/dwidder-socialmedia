import React from 'react'
import './post.css'
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";



const Post = () => {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src='https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Bilal
                            <span className="post__headerSpecial">
                                <VerifiedUserIcon className="post__badge" /> @bilal
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>This is a tweet</p>
                    </div>
                </div>
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
}


export default Post