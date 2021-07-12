import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import EditProfile from './EditProfile';
import './profile.css'
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function EditProfileModal() {

    const classes = useStyles();
    const { user } = useSelector(state => state.user)
    const { profile } = useSelector(state => state.profile)
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>{profile.user._id === user._id
            ?
            <span type="button" onClick={handleOpen} className="edit__profile">
                Edit Profile
            </span>
            :
            ""
        }

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title" style={{ color: "#50b7f5" }}>Edit Profile</h2>
                        <div id="transition-modal-description"><EditProfile setOpen={setOpen} /></div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
