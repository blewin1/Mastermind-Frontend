import React from 'react'
import { Grid, Cell } from 'styled-css-grid'
import CodePeg from '../CodePeg/CodePeg'

const PegRow = ({ pegs, selectPeg, selected, active }) => {

    const codePegs = pegs.codePegs.map((color, i) =>
        <CodePeg
            color={color}
            key={i}
            onClick={() => active ? selectPeg(i) : null}
            selected={active && selected === i}
        />)
    return (
        <Grid columns={6}>
            <Cell width={2}>
                KeyPegs
            </Cell>
            {codePegs}
        </Grid>
    )
}

export default PegRow
