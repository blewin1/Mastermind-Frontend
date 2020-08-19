import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Board from '../gameComponents/Board/Board'
import Rules from '../routes/Rules/Rules'
import GameStats from '../routes/GameStats/GameStats'
import Settings from '../routes/Settings/Settings'
import UserProfile from '../routes/UserProfile/UserProfile'

const Main = () => {
    const [game, setGame] = useState(null);

    return (
        <Switch>
            <Route exact path="/">
                <Board game={game} setGame={setGame} />
            </Route>
            <Route exact path="/rules" component={Rules} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/stats" component={GameStats} />
            <Route exact path="/profile" component={UserProfile} />
            <Route path="*" render={() => <Redirect to="/" />} />

        </Switch>
    )
}

export default Main
