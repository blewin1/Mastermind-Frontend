import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Board from '../gameComponents/Board/Board'

const Main = () => {
    return (
        // <main>
        <Switch>
            <Route exact path="/" component={Board} />
        </Switch>
        // </main>
    )
}

export default Main
