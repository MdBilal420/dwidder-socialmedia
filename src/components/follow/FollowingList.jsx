import React from 'react'
import "./follow.css"
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ProfileItem from './ProfileItem';



const FollowingList = ({ followingList }) => {


    return (
        <div className="follow">
            <div className="follow__header">
                <h2>Followings</h2>
            </div>
            <Typography variant="h4">
                Following :  {followingList.length}
            </Typography>
            <div className="list__container">

                <List>
                    {followingList.map((pro) => <ProfileItem profile={pro} key={pro._id} />)}
                </List>
            </div>

        </div >
    )
}

export default FollowingList;