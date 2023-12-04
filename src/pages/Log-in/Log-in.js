import React,{useState} from 'react';
import './Log-in.css';
import {Link,useNavigate} from 'react-router-dom';
import axios from "axios";

export default function LogIn() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onFormSubmit = (event) => {
        event.preventDefault();

        const userFinder = {
            username,
            password,
        };

        axios.post(`${process.env.REACT_APP_API_URL}/user/userFinder`, userFinder)
            .then((response) => {
                if (response.status === 200) {
                    setUsername('');
                    setPassword('');
                    navigate('/home');
                } else {

                    console.error('Login failed:', response.data.error);
                }
            })
            .catch((error) => {
                console.error('Login error:', error);
            });
    };

    return (
        <div className='container-fluid'>
            <div className='row'>

                <header className='d-flex justify-content-between align-items-center p-1'>
                    <h1 className='text-white'>User Login</h1>
                    <button id="btnSignIn" ><Link className='text-black text-decoration-none' to="/signin">Sign in</Link></button>
                </header>
                <div className="col-md-10">
                    <div className="container">

                        <form onSubmit={onFormSubmit}>
                            <label>Username:</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <br />

                            <label>Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <br />

                            <button type="submit">Login</button>

                        </form>


                    </div>
                </div>

            </div>

        </div>
    );
}


