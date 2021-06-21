import React from 'react'
import './sidebar-option.css'

const SidebarOption = ({ active, text, Icon }) => {
    return (
        <div className={`sidebar-option ${active && 'sidebar-option--active'}`}>
            <Icon className="icon" fontSize="large" />
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOption