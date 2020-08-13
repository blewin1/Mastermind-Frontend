import React, { useReducer } from 'react'
import PegRow from '../PegRow/PegRow'
import GameController from '../../../GameController'
import { useEffect, useState } from 'react'
import Flex from '../../layout/Flex/Flex'
import CodePeg from '../CodePeg/CodePeg'

const Board = () => {

    const [game, setGame] = useState(null);
    const [selected, dispatchSelected] = useReducer(selectedReducer, 0)
    const [refresh, setRefresh] = useState(true)

    function selectedReducer(state, action) {
        switch (action.type) {
            case "NEXT":
                for (let i = state; i < game.numPegs; i++) {
                    let j = i % game.numPegs;
                    if (!game.currentRow.codePegs[j]) return j
                }
                return (state + 1) % game.numPegs
            case "SET":
                return action.value;
            default:
                return state;
        }
    }
    const selectNextPeg = () => {
        dispatchSelected({ type: 'NEXT' })
    }

    const setSelected = index => {
        dispatchSelected({ type: 'SET', value: index })
    }


    useEffect(() => {
        const g = new GameController()
        g.newGame()
        g.currentRow.codePegs = [0, 1, 2, 3]
        setGame(g)
    }, [])

    if (!game) {
        return <p>Loading...</p>
    }

    const setColor = color => {
        game.currentRow.codePegs[selected] = color;
        selectNextPeg()
        setRefresh(r => !r)
    }

    const pegRows = game.rows.map((row, i) =>
        <PegRow
            selected={selected}
            selectPeg={setSelected}
            pegs={row}
            key={i}
            active={i === game.activeRow}
        />)

    const colorOptions = Array(game.numColors).fill(null).map((el, i) =>
        <CodePeg
            color={i}
            key={i}
            onClick={() => setColor(i)}
            clickable
        />)


    return (
        <Flex direction='column-reverse' justifyContent='space-between'>
            <Flex justifyContent='space-between'>
                {colorOptions}
            </Flex>
            {pegRows}
        </Flex>
    )
}

export default Board
