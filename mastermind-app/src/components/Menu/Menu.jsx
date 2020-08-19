//Adapted from css-tricks
import React, { useContext } from 'react';
import { UserContext } from '../../utils/userContext'
import StyledMenu from './Menu.styled';
import { Link } from 'react-router-dom';


const Menu = ({ open, setOpen }) => {

    const { user } = useContext(UserContext)

    return (
        <StyledMenu open={open}>
            <Link onClick={() => setOpen(false)} to="/">Play Game</Link>
            <Link onClick={() => setOpen(false)} to="/settings">Settings</Link>
            <Link onClick={() => setOpen(false)} to="/stats">Game Stats</Link>
            <Link onClick={() => setOpen(false)} to="/rules">Game Rules</Link>
            {user ?
                <Link onClick={() => setOpen(false)} to="/profile">My Profile</Link>
                : ''
            }
        </StyledMenu>
    )
}
export default Menu;