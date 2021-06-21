import React from 'react'
import SidebarOption from './SidebarOption';
import Account from './Account';
import "./sidebar.css"
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Toolbar from '@material-ui/core/Toolbar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AppBar from '@material-ui/core/AppBar';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { Link } from 'react-router-dom';



const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <TwitterIcon className="sidebar__twitterIcon" />
                <Link to='/home' style={{ color: "white", textDecoration: "none" }}>
                    <SidebarOption active Icon={HomeIcon} text="Home" />
                </Link>
                <Link to='/profile' style={{ color: "#50b7f5", textDecoration: "none" }}>
                    <SidebarOption Icon={PermIdentityIcon} text="Profile" />
                </Link>
                <Link to='/notifications' style={{ color: "#50b7f5", textDecoration: "none" }}>
                    <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
                </Link>
                <Account />
                <Link to="/" style={{ color: "#50b7f5", textDecoration: "none" }}>
                    <SidebarOption Icon={ExitToAppIcon} text="Logout" />
                </Link>
            </div>
            <div className="appbar">
                <AppBar position="fixed" color="primary" style={{ top: "auto", bottom: 0, backgroundColor: "#e6ecf0" }} >
                    <Toolbar style={{ justifyContent: "space-around" }}>
                        <Link to='/home' style={{ color: "white", textDecoration: "none" }}>
                            <SidebarOption active Icon={HomeIcon} text="Home" />
                        </Link>
                        <Link to='/profile' style={{ color: "#50b7f5", textDecoration: "none" }}>
                            <SidebarOption Icon={PermIdentityIcon} text="Profile" />
                        </Link>
                        <Link to='/notifications' style={{ color: "#50b7f5", textDecoration: "none" }}>
                            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
                        </Link>
                        <Link to="/" style={{ color: "#50b7f5", textDecoration: "none" }}>
                            <SidebarOption Icon={ExitToAppIcon} text="Logout" />
                        </Link>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    )
}

export default Sidebar
