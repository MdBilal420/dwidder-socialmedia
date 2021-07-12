import React from 'react'
import './post.css'
import { Avatar } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from '@material-ui/icons/Favorite';
import PostContent from './PostContent';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../features/profile/profileSlice';
import { addLike } from '../../features/posts/postsSlice';
import { removeLike } from '../../features/posts/postsSlice';
import { removePost } from '../../features/profile/profileSlice'


const Post = ({ post }) => {

    const { user } = useSelector(state => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation();

    const getUserProfile = () => {
        try {
            dispatch(getProfile(post.user))
            navigate(`/profile/${post.user}`)
        } catch (error) {
            console.log(error)
        }
    }

    const addToFav = async () => {
        try {
            dispatch(addLike(post))
        } catch (error) {
            console.log(error.message)
        }
    }


    const removeFromFav = async () => {
        try {
            dispatch(removeLike(post))
        } catch (error) {
            console.log(error.message)
        }
    }

    const deletePost = async () => {
        try {
            await dispatch(removePost(post))
        } catch (error) {
            console.log(error.message)
        }
    }

    const checkLike = () => {
        return post.likes.find((like) => like.user === user._id)
    }

    const checkAuthor = () => {
        return post.user === user._id
    }

    const color = "#" + Math.floor(Math.random() * 0x1000000).toString(16)
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar
                    style={{ backgroundColor: color, cursor: "pointer" }}
                    onClick={getUserProfile}
                >
                    {post.username[0].toUpperCase()}
                </Avatar>
            </div>
            <div className="post__body">
                <PostContent post={post} />
                <div className="post__footer">
                    {checkLike()
                        ?
                        <span style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <FavoriteIcon fontSize="default" onClick={removeFromFav} />

                            <p style={{ padding: "0.5rem" }}>{post.likes.length} </p>
                        </span>
                        :
                        <span style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <FavoriteBorderIcon fontSize="default" onClick={addToFav} />
                            <p style={{ padding: "0.5rem" }}>{post.likes.length} </p>
                        </span>

                    }
                    {location.pathname !== "/" && checkAuthor() ?
                        <DeleteIcon fontSize="default" onClick={deletePost} />
                        :
                        ""
                    }

                </div>
            </div>
        </div>
    )
}


export default Post