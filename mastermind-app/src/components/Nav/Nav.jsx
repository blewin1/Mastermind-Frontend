import React from 'react'
import { Grid, Cell } from 'styled-css-grid'

const Nav = () => {
    return (
        <Grid columns="50px 100px" minRowHeight="50px" justifyContent="space-between">
            <Cell center middle>Hamburger</Cell>
            <Cell center middle>Sign in</Cell>
        </Grid>
    )
}

export default Nav
