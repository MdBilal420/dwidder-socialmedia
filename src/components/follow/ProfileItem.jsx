import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import Avatar from '@material-ui/core/Avatar';

import Button from '@material-ui/core/Button';
import "./follow.css"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProfile } from '../../features/profile/profileSlice';


const color = "#" + Math.floor(Math.random() * 0x1000000).toString(16)

const ProfileItem = ({ profile }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.user)

    if (!user) {
        localStorage.removeItem('user')
        navigate('/login')
    }

    const getUserProfile = () => {
        try {
            dispatch(getProfile(profile.user))
            navigate(`/profile/${profile.user}`)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>

            <ListItem>
                <div className="account__avatar">
                    <Avatar style={{ backgroundColor: color }}>{profile.username[0].toUpperCase()}</Avatar>
                </div>
                <div className="account__info">
                    <div className="account__displayname">
                        <h3>
                            {profile.username.toUpperCase()}
                            <span>
                                <VerifiedUserIcon className="account__badge" />
                            </span>
                        </h3>
                    </div>
                    <div className="account__username">
                        @{profile.username}
                    </div>
                </div>
                <ListItemSecondaryAction>
                    <Button variant="outlined"
                        style={{ color: "#50b7f5" }}
                        onClick={getUserProfile}
                    >
                        View Profile
                    </Button>
                </ListItemSecondaryAction>
            </ListItem>
        </>
    )
}

export default ProfileItem