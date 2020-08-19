import React, { useContext } from 'react'
import { UserContext } from "../../../utils/userContext";
import Flex from '../../layout/Flex/Flex';


const GameStats = () => {

    const { user } = useContext(UserContext);

    let stats;
    if (user) {
        stats = user.game_stats.map((el, i) => (
            <Flex key={i} direction="column" alignItems="center" >
                <h3>{`Game Mode: ${el.mode}`}</h3>
                <h4>{`${el.wins} wins / ${el.losses} losses`}</h4>
                <h4>{`Win Percentage: ${Math.round((el.wins / (el.wins + el.losses)) * 100)}%`}</h4>
                <h4>{`Average Rows to completion: ${el.avg_rows.toFixed(2)}`}</h4>
                <h4>{`Least Rows Needed: ${el.least_rows}`}</h4>
            </Flex>
        ))
    }

    return (
        <Flex direction="column">
            {user && user.game_stats.length ?
                <>
                    <h2>Game Stats:</h2>
                    {stats}
                </>
                : <h2>No Stats Yet.  Play a game!</h2>
            }
        </Flex>
    )
}

export default GameStats
