import React from 'react'
import './account.css'
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

const Account = () => {
    return (
        <div className="account">
            <div className="account__avatar">
                <Avatar src='https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' />
            </div>
            <div className="account__info">
                <div className="account__displayname">
                    <h3>
                        Bilal
                        <VerifiedUserIcon className="account__badge" />
                    </h3>
                </div>
                <div className="account__username">
                    @bilal
                </div>
            </div>
        </div>
    )
}

export default Account