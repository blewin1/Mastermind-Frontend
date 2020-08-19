import React, { useEffect, useContext } from "react";
import { UserContext } from "./utils/userContext";
import "./App.css";
import { Grid } from "styled-css-grid";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
// import BootstrapProvider from "@bootstrap-styled/provider";
import { theme } from "./theme";
import { GlobalStyles } from "./global";
import { ThemeProvider } from "styled-components";

import apiUrl from "./utils/apiConfig";
import axios from "axios";

function App() {
    const { setUser } = useContext(UserContext);

    useEffect(() => {
        const autoLogin = async () => {
            try {
                const token = localStorage.getItem("token");
                if (token) {
                    const res = await axios({
                        url: `${apiUrl}/users/auto_login`,
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    setUser(JSON.parse(res.data.user));
                }
            } catch (err) {
                console.error(err);
            }
        };
        autoLogin();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Grid className="App" columns={1} rows="50px 1fr">
                <Nav />
                <Main />
            </Grid>
        </ThemeProvider>
    );
}

export default App;
