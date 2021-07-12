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
import SearchIcon from '@material-ui/icons/Search';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, removeProfile } from '../../features/profile/profileSlice';
import { removeUser } from '../../features/user/userSlice'


const Sidebar = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)

    const logout = () => {
        dispatch(removeUser())
        dispatch(removeProfile())
        localStorage.removeItem('user')
        navigate('/login')
    }

    const handleProfile = async () => {

        try {
            await dispatch(getProfile(user._id))
        } catch (err) {
            console.log(err.message)
        }
        navigate(`/profile/${user._id}`)
    }


    return (
        <>
            <div className="sidebar">
                <TwitterIcon className="sidebar__twitterIcon" />
                <Link to='/' style={{ color: "white", textDecoration: "none" }}>
                    <SidebarOption active Icon={HomeIcon} text="Home" />
                </Link>
                <span style={{ color: "#50b7f5" }} onClick={handleProfile}>
                    <SidebarOption Icon={PermIdentityIcon} text="Profile" />
                </span>

                <Link to='/search' style={{ color: "#50b7f5", textDecoration: "none" }}>
                    <SidebarOption Icon={SearchIcon} text="Explore" />
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
                        <span style={{ color: "#50b7f5" }} onClick={() => navigate(`/profile/${user._id}`)}>
                            <SidebarOption Icon={PermIdentityIcon} text="Profile" />
                        </span>

                        <Link to='/search' style={{ color: "#50b7f5", textDecoration: "none" }}>
                            <SidebarOption Icon={SearchIcon} text="explore" />
                        </Link>

                        <Link to='/notifications' style={{ color: "#50b7f5", textDecoration: "none" }}>
                            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
                        </Link>

                        <span onClick={logout} style={{ color: "#50b7f5" }}>
                            <SidebarOption
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
