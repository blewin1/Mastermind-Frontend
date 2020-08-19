import React, { useContext } from 'react'
import { UserContext } from "../../../utils/userContext";
import Flex from '../../layout/Flex/Flex';
import GameStat from './GameStat';


const GameStats = () => {

    const { user } = useContext(UserContext);

    let stats;
    if (user) {
        stats = user.game_stats.map((el, i) => (
            <GameStat key={i} >
                <h3>{`Game Mode: ${el.mode}`}</h3>
                <h4>{`${el.wins} wins / ${el.losses} losses`}</h4>
                <h4>{`Win Percentage: ${Math.round((el.wins / (el.wins + el.losses)) * 100)}%`}</h4>
                <h4>{`Average Rows to completion: ${el.avg_rows.toFixed(2)}`}</h4>
                <h4>{`Least Rows Needed: ${el.least_rows}`}</h4>
            </GameStat>
        ))
    }

    return (
        <Flex direction="column" justifyContent="center" >
            {user && user.game_stats.length ?
                <>
                    <h1>Game Stats:</h1>
                    {stats}
                </>
                : <h2>No Stats Yet.  Play a game!</h2>
            }
        </Flex>
    )
}

export default GameStats
