import { Button, Avatar, InputBase } from '@material-ui/core'
import React from 'react'
import './postbox.css'


const Postbox = () => {

    return (
        <div className="postbox">
            <form>
                <div className="postbox__input">
                    <Avatar src='https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' />
                    <InputBase
                        className="text-area"
                        placeholder="What's happening?"
                    />
                </div>
                <Button className="postbox__button">dweed</Button>
            </form>
        </div>
    )
}


export default Postbox