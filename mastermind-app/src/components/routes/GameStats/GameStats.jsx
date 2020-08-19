import React, { useContext } from 'react'
import { UserContext } from "../../../utils/userContext";
import Flex from '../../layout/Flex/Flex';


const GameStats = () => {

    const { user } = useContext(UserContext);


    return (
        <Flex direction="column">
            {user.game_stats ?
                <h3>Here are stats</h3>
                : <h2>No Stats Yet.  Play a game!</h2>
            }
        </Flex>
    )
}

export default GameStats
