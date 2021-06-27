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
import { Link, useNavigate } from 'react-router-dom';



const Sidebar = () => {

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('user')
        navigate('/login')
    }

    return (
        <>
            <div className="sidebar">
                <TwitterIcon className="sidebar__twitterIcon" />
                <Link to='/' style={{ color: "white", textDecoration: "none" }}>
                    <SidebarOption active Icon={HomeIcon} text="Home" />
                </Link>
                <Link to='/profile' style={{ color: "#50b7f5", textDecoration: "none" }}>
                    <SidebarOption Icon={PermIdentityIcon} text="Profile" />
                </Link>
                <Link to='/notifications' style={{ color: "#50b7f5", textDecoration: "none" }}>
                    <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
                </Link>
                <Account />

                <span onClick={logout}>
                    <SidebarOption Icon={ExitToAppIcon} text="Logout" />
                </span>

            </div>
            <div className="appbar">
                <AppBar position="fixed" color="primary" style={{ top: "auto", bottom: 0, backgroundColor: "#e6ecf0" }} >
                    <Toolbar style={{ justifyContent: "space-around" }}>
                        <Link to='/' style={{ color: "white", textDecoration: "none" }}>
                            <SidebarOption active Icon={HomeIcon} text="Home" />
                        </Link>
                        <Link to='/profile' style={{ color: "#50b7f5", textDecoration: "none" }}>
                            <SidebarOption Icon={PermIdentityIcon} text="Profile" />
                        </Link>
                        <Link to='/notifications' style={{ color: "#50b7f5", textDecoration: "none" }}>
                            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
                        </Link>

                        <span style={{ color: "#50b7f5" }}>
                            <SidebarOption
                                onClick={logout}
                                Icon={ExitToAppIcon}
                                text="Logout"
                            />
                        </span>

                    </Toolbar>
                </AppBar>
            </div>
        </>
    )
}

export default Sidebar
