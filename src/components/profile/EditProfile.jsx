import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../features/profile/profileSlice'


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '35ch',
        },
    },
}));

const EditProfile = ({ setOpen }) => {

    const classes = useStyles();
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)

    const [formData, setFormData] = useState({
        bio: "Add Bio",
        birthdate: "01-01-1990",
        location: "unknown",
        website: "https://"
    })
    const { bio, birthdate, location, website } = formData

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('https://dwidder-backend.herokuapp.com/api/profile', formData)
            await dispatch(getProfile(user._id))
        } catch (error) {
            console.log(error);
        }
        setOpen(false)
    }


    return (

        <form onSubmit={handleSubmit} className={classes.root}>
            <div><TextField
                id="outlined-multiline-static"
                label="Bio"
                multiline
                rows={4}
                variant="outlined"
                name="bio"
                onChange={handleChange}
                value={bio}
            /></div>
            <div>
                <TextField
                    id="filled-basic"
                    label="Birthdate (MM-DD-YEAR)"
                    variant="outlined"
                    name="birthdate"
                    onChange={handleChange}
                    value={birthdate}
                />
            </div>
            <div><TextField id="filled-basic" label="Location"
                variant="outlined"
                name="location"
                onChange={handleChange}
                value={location}
            /></div>
            <div><TextField
                id="filled-basic"
                label="Website" variant="outlined"
                name="website"
                onChange={handleChange}
                value={website}
            /></div>


            <button type="submit" value="Submit"><h2>Save</h2></button>
        </form>

    )
}

export default EditProfile