import React from "react";
import "./App.css";
import { Grid, Cell } from "styled-css-grid";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";

function App() {
    return (
        // <div className="App">
        <Grid className="App" columns={1} rows="50px 1fr">
            <Nav />
            <Main />
        </Grid>
        // </div>
    );
}

export default App;
