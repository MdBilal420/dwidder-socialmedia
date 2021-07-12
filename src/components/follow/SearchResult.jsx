import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './follow.css'
import ProfileItem from './ProfileItem'
import List from '@material-ui/core/List';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import { useSelector } from 'react-redux';

const SearchResult = () => {

    const { user } = useSelector(state => state.user)
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true)
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    console.log(user)
    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(`https://dwidder-backend.herokuapp.com/api/profile`);

                setSearchResults(
                    res.data.filter((it) => it.user._id !== user._id)
                        .filter((p) => p.user.username.toLowerCase().includes(searchTerm))
                )
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [user, searchTerm])


    console.log(searchResults)
    return (
        <div className="follow">
            <div className="follow__header">
                <h2>Explore</h2>
            </div>

            <div className='list__container'>
                <TextField id="outlined-basic" label="Search..." variant="outlined"
                    onChange={handleChange}
                />
                {searchTerm.length > 0 && <h2> Results: {searchResults.length} </h2>}
                {loading && <CircularProgress />}
                <List>
                    {searchResults.map((pro) => <ProfileItem profile={pro.user} key={pro._id} />)}
                </List>
            </div>
        </div>
    )
}

export default SearchResult