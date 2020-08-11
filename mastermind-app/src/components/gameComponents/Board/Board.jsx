import React from 'react'
import { Grid } from 'styled-css-grid'
import PegRow from '../PegRow/PegRow'

const Board = () => {

    const pegRows = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((el, i) => <PegRow key={i} />)
    return (
        // <div>
        <Grid columns={1} rows={12} justifyContent="space-between">
            {pegRows}
        </Grid >
        // </div>
    )
}

export default Board
