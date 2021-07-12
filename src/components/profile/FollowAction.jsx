import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { follow, unfollow } from '../../features/profile/profileSlice'
import { Button } from '@material-ui/core'
import './profile.css'

const FollowAction = ({ profile }) => {

    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)

    const followProfile = async () => {
        try {
            await dispatch(follow(profile))
        } catch (error) {
            console.log(error.message)
        }
    }

    const unfollowProfile = async () => {
        try {
            await dispatch(unfollow(profile))
        } catch (error) {
            console.log(error.message)
        }
    }


    const checkFollow = () => {
        return profile.followers.find((pro) => pro.user === user._id)
    }

    return (
        <>
            {checkFollow()
                ?
                <Button onClick={unfollowProfile}
                    className="sec__button"
                >Unfollow</Button>
                :
                <Button onClick={followProfile}
                    className="prm__button"
                >follow</Button>
            }
        </>
    )
}

export default FollowAction