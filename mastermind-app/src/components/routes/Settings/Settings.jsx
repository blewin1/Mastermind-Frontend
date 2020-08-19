import React, { useContext } from 'react'
import { UserContext } from "../../../utils/userContext";
import Flex from '../../layout/Flex/Flex';
import Axios from 'axios';
import apiUrl from '../../../utils/apiConfig';
import { Link } from 'react-router-dom';

const Settings = () => {

    const { user, setUser, nonLoginMode, setNonLoginMode } = useContext(UserContext);

    const current = user ? user.game_type : nonLoginMode

    const handleChange = async (e) => {
        setNonLoginMode(e.target.value);
        if (user) {
            try {
                const token = localStorage.getItem("token");
                if (token) {
                    const res = await Axios({
                        url: `${apiUrl}/users/${user.id}`,
                        method: 'put',
                        headers: { Authorization: `Bearer ${token}` },
                        data: { user: { game_type: e.target.value } }
                    });
                    if (res.data.status === 200) {
                        setUser(JSON.parse(res.data.user))
                    }
                }
            } catch (err) {
                console.error(err)
            }

        }
    }

    return (
        <Flex direction="column" alignItems="center">
            <form>
                <label>
                    <input type="radio" value="4x6" checked={current === '4x6'} onChange={handleChange} />
                    Normal Mode: 4 pegs, 6 colors.
                </label>
                <label>
                    <input type="radio" value="5x8" checked={current === '5x8'} onChange={handleChange} />
                    Hard Mode: 5 pegs, 8 colors.
                </label>
                <label>
                    <input type="radio" value="6x8" checked={current === '6x8'} onChange={handleChange} />
                    Harder Mode: 6 pegs, 8 colors.
                </label>
            </form>
            <Link to="/"><button>Back to Game</button></Link>
        </Flex>
    )
}

export default Settings
