import React from 'react'
import { Grid } from 'styled-css-grid'
import KeyPeg from '../KeyPeg/KeyPeg'

const KeyPegs = ({ pegs }) => {
    return (
        <Grid rows={2} columns={Math.ceil(pegs.length / 2)} alignContent='center'>
            {pegs.map((el, i) => {
                return <KeyPeg type={el} key={i} />
            })}
        </Grid>
    )
}

export default KeyPegs
