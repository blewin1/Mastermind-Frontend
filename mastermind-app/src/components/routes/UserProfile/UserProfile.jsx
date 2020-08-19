import React, { useContext } from 'react'
import { UserContext } from '../../../utils/userContext'

const UserProfile = ({ history }) => {
    const { setUser, user } = useContext(UserContext);

    const logout = () => {
        setUser(null);
        localStorage.setItem("token", null);
        history.push('/')
    }

    if (!user) history.push('/')

    return (
        <div>
            <h2>{user.firstname}</h2>
            <h3>{user.email}</h3>
            <h3 onClick={logout}>Log Out</h3>
        </div>
    )
}

export default UserProfile
