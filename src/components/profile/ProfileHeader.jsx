import React from 'react'
import { Avatar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import LinkIcon from '@material-ui/icons/Link';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Typography from '@material-ui/core/Typography';
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import './profileheader.css'
import EditProfileModal from './EditProfileModal';
import FollowAction from './FollowAction';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%"
    },
    media: {
        height: 200,
    },
    large: {
        width: "4rem",
        height: "4rem",
    }, backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    footer: {
        display: "flex",
        justifyContent: "space-between"
    }
}));


const ProfileHeader = ({ profile }) => {
    const classes = useStyles();

    const { user } = useSelector(state => state.user)
    const navigate = useNavigate()

    console.log("followers", profile.followers)
    console.log("following", profile.following)

    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image="https://pbs.twimg.com/profile_banners/230593599/1599025074/600x200"
                />
                <CardContent className={classes.root}>
                    <div className="profile__info">
                        <div>
                            <Avatar
                                className={classes.large}
                                style={{ backgroundColor: "blue" }}
                            >
                                {profile.user.username[0].toUpperCase()}
                            </Avatar>
                        </div>
                        <div className="profile__account__info">
                            <div className="profile__account__displayname">
                                <h2>
                                    {profile.user.username.toUpperCase()}
                                    <VerifiedUserIcon className="profile__account__badge" />
                                </h2>
                            </div>
                            <div className="profile__account__username">
                                <h3>@{profile.user.username}</h3>
                            </div>
                        </div>
                    </div>
                    <Typography style={{ alignItems: "center", fontSize: "1.2rem", fontWeight: "bolder" }}>
                        {profile.bio}
                    </Typography>
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", padding: "1rem" }}>
                        <div style={{ display: "flex", alignItems: "center", padding: "5px" }}>
                            <LocationOnIcon fontSize="default" /><h3>: {profile.location}</h3></div>
                        <div style={{ display: "flex", alignItems: "center", padding: "5px" }}>
                            <LinkIcon fontSize="default" />
                            <h3>
                                : {profile.website}
                            </h3>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", padding: "5px" }}>
                            <DateRangeIcon fontSize="default" />
                            <h3>: {profile.birthdate.split('T')[0]}</h3></div>
                    </div>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.footer}>
                <h4>
                    <span
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate('/followers')}
                    >
                        {profile.followers.length >= 1 ? profile.followers.length : 0}
                        {" "}Followers
                    </span>
                    {"             |            "}
                    <span
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate('/following')}
                    >
                        {profile.following.length >= 1 ? profile.following.length : 0}
                        {" "}Following
                    </span>
                </h4>

                {
                    user._id === profile.user._id
                        ?
                        <EditProfileModal style={{ float: "right", marginRight: "0", cursor: "pointer" }} />
                        :
                        <FollowAction profile={profile} />
                }

            </CardActions>

        </Card >
    )
}

export default ProfileHeader