import React from 'react'
import { Grid, Cell } from 'styled-css-grid'
import CodePeg from '../CodePeg/CodePeg'
import KeyPegs from '../KeyPegs/KeyPegs'
import { Button } from '@bootstrap-styled/v4'

const PegRow = ({ pegs, selectPeg, selected, active, submitRow }) => {

    const rowFull = active ? pegs.codePegs.every(el => el != null) : false;

    const codePegs = pegs.codePegs.map((color, i) =>
        <CodePeg
            color={color}
            key={i}
            onClick={() => active ? selectPeg(i) : null}
            selected={active && selected === i}
            clickable={active}
        />)
    return (
        <Grid columns={pegs.codePegs.length + 1}>
            <Cell>
                {rowFull ? <button size='sm' onClick={submitRow}>S</button> :
                    <KeyPegs pegs={pegs.keyPegs} />}
            </Cell>
            {codePegs}
        </Grid>
    )
}

export default PegRow
