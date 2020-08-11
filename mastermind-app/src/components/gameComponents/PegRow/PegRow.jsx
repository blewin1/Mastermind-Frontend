import React from 'react'
import { Grid, Cell } from 'styled-css-grid'
import CodePeg from '../CodePeg/CodePeg'

const PegRow = () => {

    const codePegs = [1, 2, 3, 4].map((el, i) => <CodePeg key={i} />)
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
