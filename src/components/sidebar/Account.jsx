import React from 'react'
import './account.css'
import { useNavigate } from 'react-router-dom'
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { useSelector } from 'react-redux';

const Account = () => {

    const { user } = useSelector(state => state.user)

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('user')
        navigate('/login')
    }

    if (!user) {
        logout()
    }

    return (
        <div className="account">
            <div className="account__avatar">
                <Avatar style={{ backgroundColor: "brown" }}>{user.username[0].toUpperCase()}</Avatar>
            </div>
            <div className="account__info">
                <div className="account__displayname">
                    <h3>
                        {user.username.toUpperCase()}
                        <span>
                            <VerifiedUserIcon className="account__badge" />
                        </span>
                    </h3>
                </div>
                <div className="account__username">
                    @{user.username}
                </div>
            </div>
        </div>
    )
}

export default Account