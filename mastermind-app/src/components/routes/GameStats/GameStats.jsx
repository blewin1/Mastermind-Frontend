import React, { useContext } from 'react'
import { UserContext } from "../../../utils/userContext";


const GameStats = () => {

    const { user } = useContext(UserContext);


    return (
        <div>
            {user.email}
        </div>
    )
}

export default GameStats
