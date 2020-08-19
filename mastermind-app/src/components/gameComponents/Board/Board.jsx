import React, { useReducer, useEffect, useState, useContext } from 'react'
import PegRow from '../PegRow/PegRow'
import GameController from '../../../utils/GameController'
import Flex from '../../layout/Flex/Flex'
import CodePeg from '../CodePeg/CodePeg'
import { Cell, Grid } from 'styled-css-grid'
import { UserContext } from '../../../utils/userContext'
import apiUrl from '../../../utils/apiConfig'
import axios from 'axios'
import Modal from '../../layout/Modal/Modal'
import { withRouter } from 'react-router'
import { Repeat } from '@styled-icons/evaicons-solid/Repeat'



const Board = ({ history, game, setGame }) => {

    const [selected, dispatchSelected] = useReducer(selectedReducer, 0)
    const [_refresh, setRefresh] = useState(true)
    const [closeModal, setCloseModal] = useState(true)

    const { user, setUser } = useContext(UserContext)

    const refresh = () => setRefresh(r => !r)

    const reload = async () => {
        try {
            const token = localStorage.getItem("token");
            console.log("Auto Login.  Token:", token);
            if (token) {
                const res = await axios({
                    url: `${apiUrl}/users/auto_login`,
                    headers: { Authorization: `Bearer ${token}` }
                });
                console.log("reload:", JSON.parse(res.data.user));
                setUser(JSON.parse(res.data.user));
            }
        } catch (err) {
            console.error(err);
        }
    }

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

    const saveGame = async (_game) => {
        try {
            const token = localStorage.getItem("token");
            if (token) {
                const gameData = await axios({
                    url: `${apiUrl}/users/${user.id}`,
                    method: 'put',
                    headers: { Authorization: `Bearer ${token}` },
                    data: { user: { game_data: _game.export() } }
                });
                console.log(gameData)
            }
        } catch (err) {
            console.error("Error saving game:", err);
        }
    }

    const submitRow = async () => {
        game.submitRow()
        if (game.result) {
            setCloseModal(false)

            // updateGameStats()

        }
        setSelected(0)
        if (user) {
            await saveGame(game)
            reload()
        } else {
            refresh()
        }
    }

    const newGame = () => {
        // game.numPegs = 5
        // game.numColors = 8
        game.newGame()
        console.log(game.code)
        refresh()
    }

    useEffect(() => {
        const g = new GameController()
        if (user && user.game_data) {
            console.log('should load gamedata')
            g.load(user.game_data)
        } else {
            g.newGame()
        }
        console.log(g.code)
        setGame(g)
    }, [user])

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
        <>
            {game.result && !closeModal ?
                <Modal close={() => setCloseModal(true)}>
                    {game.result === 'WIN' ?
                        <>
                            <h2>Congrats, You Won!</h2>
                            <h3>{`${game.activeRow} rows to complete`}</h3>
                        </>
                        : <h2>Darn, You Lost.</h2>
                    }
                    {user ?
                        <button onClick={() => history.push('/stats')}>View Full Stats</button>
                        : <h4>Sign in to keep track of stats!</h4>
                    }

                    <button onClick={newGame}>Play Again</button>
                </Modal>
                : ''
            }
            <Flex>
                <Flex className="board" direction='column-reverse' justifyContent='space-between'>
                    <Flex justifyContent='space-between'>
                        {colorOptions}
                    </Flex>
                    {pegRows}
                    <Grid columns={game.numPegs + 1}>
                        <Cell>{game.result ? <Repeat title="New Game" onClick={newGame} /> : ''}</Cell>
                        {code}
                    </Grid>
                </Flex>
            </Flex>
        </>
    )
}

export default withRouter(Board)
