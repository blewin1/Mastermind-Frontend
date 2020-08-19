import React from 'react'
import { Grid, Cell } from 'styled-css-grid'
import CodePeg from '../CodePeg/CodePeg'
import KeyPegs from '../KeyPegs/KeyPegs'
import { CheckSquareFill } from '@styled-icons/bootstrap/CheckSquareFill'

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
                {rowFull ? <CheckSquareFill title="Submit Row" onClick={submitRow}>S</CheckSquareFill> :
                    <KeyPegs pegs={pegs.keyPegs} />}
            </Cell>
            {codePegs}
        </Grid>
    )
}

export default PegRow
