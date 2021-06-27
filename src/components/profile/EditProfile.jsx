import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '35ch',
        },
    },
}));

const EditProfile = () => {

    const classes = useStyles();

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
        console.log(formData)
        try {
            const res = await axios.post('http://localhost:5000/api/profile', formData)
            console.log(res);
        } catch (error) {
            console.log(error);
        }

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
                    label="Birthdate (DD-MM-YEAR)"
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