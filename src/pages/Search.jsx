import React from 'react'
import { useSelector } from 'react-redux'
import '../App.css'
import SearchResult from '../components/follow/SearchResult'
import Sidebar from '../components/sidebar/Sidebar'

const Search = () => {

    const { user } = useSelector(state => state.user)

    return (
        <div className="container">
            {user && <Sidebar />}
            {user && <SearchResult />}
        </div>
    )
}

export default Search