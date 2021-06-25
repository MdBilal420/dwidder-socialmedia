import { Button, Avatar, InputBase } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../../features/posts/postsSlice'
import './postbox.css'


const Postbox = () => {

    const [postContent, setPostContent] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = () => {
        console.log(postContent)
        dispatch(addPost(postContent))
    }

    return (
        <div className="postbox">
            <form onSubmit={handleSubmit}>
                <div className="postbox__input">
                    <Avatar src='https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' />
                    <InputBase
                        className="text-area"
                        placeholder="What's happening?"
                        onChange={e => setPostContent(e.target.value)}
                        value={postContent}
                    />
                </div>
                <Button type="submit" className="postbox__button">dweed</Button>
            </form>
        </div>
    )
}


export default Postbox