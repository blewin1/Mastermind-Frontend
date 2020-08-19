import React, { useContext } from 'react'
import { UserContext } from '../../../utils/userContext'
import Flex from '../../layout/Flex/Flex';

const UserProfile = ({ history }) => {
    const { setUser, user } = useContext(UserContext);

    const logout = () => {
        setUser(null);
        localStorage.setItem("token", null);
        history.push('/')
    }

    if (!user) history.push('/')

    return (
        <Flex direction="column" alignItems="center">
            <h2>{user.firstname}</h2>
            <h3>{user.email}</h3>
            <button><h3 onClick={logout}>Log Out</h3></button>
        </Flex>
    )
}

export default UserProfile
