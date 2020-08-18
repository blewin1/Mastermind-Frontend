import React, { useReducer } from 'react'
import PegRow from '../PegRow/PegRow'
import GameController from '../../../utils/GameController'
import { useEffect, useState } from 'react'
import Flex from '../../layout/Flex/Flex'
import CodePeg from '../CodePeg/CodePeg'
import { Cell, Grid } from 'styled-css-grid'
import { Button } from '@bootstrap-styled/v4'


const Board = () => {

    const [game, setGame] = useState(null);
    const [selected, dispatchSelected] = useReducer(selectedReducer, 0)
    const [_refresh, setRefresh] = useState(true)
    // const [result, setResult] = useState(null)

    const refresh = () => setRefresh(r => !r)

    function selectedReducer(state, action) {
        switch (action.type) {
            case "NEXT":
                for (let i = 0; i < game.numPegs; i++) {
                    let j = (state + i) % game.numPegs;
                    if (game.currentRow.codePegs[j] == null) return j
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

    const submitRow = () => {
        game.submitRow()
        // setResult(game.result)

        setSelected(0)
        refresh()
    }

    const newGame = () => {
        game.newGame()
        console.log(game.code)
        refresh()
    }

    useEffect(() => {
        const g = new GameController()
        g.newGame()
        console.log(g.code)
        setGame(g)
    }, [])

    if (!game) {
        return <p>Loading...</p>
    }

    const setColor = color => {
        game.currentRow.codePegs[selected] = color;
        selectNextPeg()
        refresh()
    }

    const pegRows = game.rows.map((row, i) =>
        <PegRow
            selected={selected}
            selectPeg={setSelected}
            pegs={row}
            key={i}
            active={!game.result && i === game.activeRow}
            submitRow={submitRow}
        />)

    const colorOptions = Array(game.numColors).fill(null).map((el, i) =>
        <CodePeg
            color={i}
            key={i}
            onClick={() => setColor(i)}
            clickable
        />)

    const code = game.result ?
        game.code.map((el, i) => <CodePeg color={el} key={i} />) :
        Array(game.numPegs).fill(null).map((el, i) => <CodePeg color={-1} key={i}>?</CodePeg>);


    return (
        <Flex direction='column-reverse' justifyContent='space-between'>
            <Flex justifyContent='space-between'>
                {colorOptions}
            </Flex>
            {pegRows}
            <Grid columns={6}>
                <Cell width={2}>{game.result ? <Button onClick={newGame}>New Game</Button> : ''}</Cell>
                {code}
            </Grid>
        </Flex>
    )
}

export default Board
