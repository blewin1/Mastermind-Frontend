import React from "react";
import "./App.css";
import { Grid } from "styled-css-grid";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import BootstrapProvider from "@bootstrap-styled/provider";

function App() {
    return (
        // <div className="App">
        <BootstrapProvider>
            <Grid className="App" columns={1} rows="50px 1fr">
                <Nav />
                <Main />
            </Grid>
        </BootstrapProvider>
        // </div>
    );
}

export default App;
