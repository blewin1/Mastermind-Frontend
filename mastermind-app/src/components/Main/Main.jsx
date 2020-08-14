import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Board from '../gameComponents/Board/Board'

const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={Board} />
        </Switch>
    )
}

export default Main
