import React, { useState, useContext, useEffect } from "react";
import { UserContext } from '../../utils/userContext'
import axios from 'axios'
import apiUrl from "../../utils/apiConfig";


const Login = ({ closeLogin }) => {
    const [input, setInput] = useState({ email: "", password: "", firstname: "" });
    const [creatingAccount, setCreatingAccount] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        // setError('');
    }, [])

    const { setUser, user } = useContext(UserContext)

    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value,
        });
    };
    const submitForm = async (event) => {
        event.preventDefault();
        if (creatingAccount) {
            await createAccount()
        } else {
            await login()
        }
        setInput({ email: "", password: "", firstname: "" });
        closeLogin();
    };

    const login = async () => {
        const res = await axios.post(`${apiUrl}/users/login`, { user: { email: input.email, password: input.password } })
        if (res.data.status === 200) {
            setUser(JSON.parse(res.data.user))
            localStorage.setItem("token", res.data.token)
        } else {
            console.log('Invalid username or password')
        }
    }

    const createAccount = async () => {
        try {
            const res = await axios.post(`${apiUrl}/users`, { user: input })
            if (res.data.status === 201) {
                setUser(res.data.user)
                localStorage.setItem("token", res.data.token)
            } else {
                console.log('Something went wrong, try again')
            }
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <h2>{creatingAccount ? 'Create Account' : 'Login'}</h2>
            {creatingAccount ?
                <input
                    type="text"
                    name="firstname"
                    onChange={handleChange}
                    value={input.firstname}
                    placeholder="First Name"
                /> : ''
            }
            <form onSubmit={submitForm}>
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={input.email}
                    placeholder="email@example.com"
                />
                <input
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={input.password}
                />
                {error ? <span className="form-error">{error}</span> : ''}
                <span onClick={() => setCreatingAccount(c => !c)} className='link-btn'>{creatingAccount ? 'Use existing account' : 'Create Account'}</span>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default Login;
