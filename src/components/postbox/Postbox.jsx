import { Button, Avatar, InputBase } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost } from '../../features/posts/postsSlice'
import './postbox.css'


const Postbox = () => {

    const [postContent, setPostContent] = useState("")
    const [disable, setDisable] = useState(false)
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)


    const handleChange = (e) => {
        setPostContent(e.target.value)
        postContent.length > 120 ? setDisable(true) : setDisable(false)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        await dispatch(addPost(postContent))
        setPostContent("")
    }

    return (
        <div className="postbox">
            <form onSubmit={handleSubmit}>
                <div className="postbox__input">
                    <Avatar style={{ backgroundColor: "brown" }}>{user.username[0].toUpperCase()}</Avatar>
                    <InputBase
                        className="text-area"
                        placeholder=" What's happening?"
                        onChange={handleChange}
                        value={postContent}
                    />
                </div>
                <span className="content__length">{postContent.length}/120</span>
                <Button type="submit" className="postbox__button" disabled={disable} >POST</Button>
            </form>
        </div>
    )
}


export default Postbox