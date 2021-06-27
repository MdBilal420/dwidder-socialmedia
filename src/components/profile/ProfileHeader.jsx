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
import { useSelector } from 'react-redux';

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
}));


const ProfileHeader = () => {
    const classes = useStyles();


    const { user } = useSelector(state => state.user)
    console.log(user);

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
                                src='https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                            />
                        </div>
                        <div className="profile__account__info">
                            <div className="profile__account__displayname">
                                <h2>
                                    {user.username}
                                    <VerifiedUserIcon className="profile__account__badge" />
                                </h2>
                            </div>
                            <div className="profile__account__username">
                                <h3>@{user.username}</h3>
                            </div>
                        </div>
                        <EditProfileModal style={{ float: "right", marginRight: "0" }} />

                    </div>
                    <Typography variant="body1" color="textPrimary" component="h4">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    <div style={{ display: "flex", justifyContent: "start" }}>
                        <div style={{ display: "flex", alignItems: "center", padding: "5px" }}><LocationOnIcon /><p>India</p></div>
                        <div style={{ display: "flex", alignItems: "center", padding: "5px" }}><LinkIcon />
                            <p>
                                google.com
                            </p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", padding: "5px" }}><DateRangeIcon /><p>21/06/1990</p></div>

                    </div>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <p>
                    25 Followers
                </p>
                <p>
                    15 Following
                </p>
            </CardActions>

        </Card >
    )
}

export default ProfileHeader