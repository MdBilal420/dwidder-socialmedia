import React from 'react'
import { useSelector } from 'react-redux'
import NotificationList from '../components/notification/NotificationList'
import Sidebar from '../components/sidebar/Sidebar'


const Notification = () => {

    const { user } = useSelector(state => state.user)

    return (
        <div className="container">
            <Sidebar />
            {user && <NotificationList />}
        </div>
    )
}


export default Notification