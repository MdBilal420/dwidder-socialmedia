import React from 'react'
import { InputBase } from '@material-ui/core'
import SearchIcon from "@material-ui/icons/Search";
import './profiles.css'

const Profiles = () => {
    return (
        <div className="profiles">
            <div className="profiles__input">
                <InputBase
                    className="search__input"
                    placeholder="Search Profiles"
                />
                <SearchIcon className="profiles__searchicon" />
            </div>
            <div className="profiles__profileContainer">
                <h2>People You may know</h2>
            </div>
        </div>
    )
}


export default Profiles