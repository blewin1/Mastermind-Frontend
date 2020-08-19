import React, { useContext, useState } from 'react'
import { UserContext } from '../../utils/userContext'
import Burger from '../Burger/Burger'
import StyledNav from './Nav.styled'
import { Link } from 'react-router-dom'
import Menu from "../Menu/Menu";
import Modal from "../layout/Modal/Modal";
import Login from "../Login/Login";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const { user } = useContext(UserContext)

    const closeLogin = () => setLoginOpen(false);

    return (
        <>
            <StyledNav>
                <Burger open={menuOpen} setOpen={setMenuOpen} />
                <h1>Mastermind</h1>
                {user ?
                    <Link onClick={() => setMenuOpen(false)} to="/profile">
                        <h2>{user.firstname}</h2>
                    </Link>
                    :
                    <h2 onClick={() => setLoginOpen(true)}>Sign in</h2>
                }
            </StyledNav>
            <Menu open={menuOpen} setOpen={setMenuOpen} />
            {
                loginOpen ? (
                    <Modal close={closeLogin}>
                        <Login closeLogin={closeLogin} />
                    </Modal>
                ) : (
                        ""
                    )
            }
        </>
    )
}

export default Nav
