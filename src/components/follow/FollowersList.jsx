import React from 'react'
import "./follow.css"


import List from '@material-ui/core/List';
import ProfileItem from './ProfileItem';



const FollowersList = ({ followersList }) => {

    return (
        <div className="follow">
            <div className="follow__header">
                <h2>Followers</h2>
            </div>
            <h1>Followers : {followersList.length} </h1>


            <div className='list__container'>
                <List>
                    {followersList.map((pro) => <ProfileItem profile={pro} />)}
                </List>
            </div>
        </div>
    )
}

export default FollowersList;