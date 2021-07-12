import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNotifications } from '../../features/notifications/notificationSlice'
import './notification.css'

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

const NotificationList = () => {

    const classes = useStyles();

    const { notifications } = useSelector(state => state.notification)
    const { user } = useSelector(state => state.user)
    const dispatch = useDispatch()

    const color = "#" + Math.floor(Math.random() * 0x1000000).toString(16)

    console.log(notifications.notifications)

    useEffect(() => {
        try {
            (async () => {
                await dispatch(getNotifications(user._id))
            })()
        } catch (error) {
            console.log(error);
        }
    }, [dispatch, user])

    return (
        <div className="follow">
            <div className="follow__header">
                <h2>Notifications</h2>
            </div>

            <div className='list__container'>
                {notifications.length === 0 && <h3>No new notifications</h3>}
                {<List className={classes.root}>
                    {notifications.notifications && notifications.notifications.map((it) => {
                        return (
                            <div key={it._id}>
                                < ListItem alignItems="flex-start" >
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" style={{ backgroundColor: color }}>
                                            {it.fromUser.username[0]}
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={it.fromUser.username.toUpperCase()}
                                        secondary={

                                            <Typography
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textPrimary"
                                            >
                                                {
                                                    it.notificationType === 'FOLLOW'
                                                        ?
                                                        <Typography>followed you.{"   "} {it.time.split('.')[0]}</Typography>
                                                        :
                                                        <Typography>liked your post.{"   "}{it.time.split('.')[0]}</Typography>
                                                }
                                            </Typography>
                                        }
                                    />

                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </div>
                        )
                    }
                    )}
                </List>}
            </div>
        </div >
    )
}

export default NotificationList