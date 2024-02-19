import React, { useState } from 'react';
import { axios } from '@Axios';
// import axios from 'axios';
import styles from './LoginForm.module.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const postLoginData = async () => {
        try {

            const res = await axios.post('/api/v1/users/login', { email, password },
                {
                    headers: {
                        'withCredentials': true
                    }
                });
            if (res.status === 200) {
                console.log(res,"jkl");
                console.log("hi");
                // navigate('/user');
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        postLoginData();
        Cookies.set('name', 'value')
        // setEmail("");
        // setPassword("");
        // const accessToken = Cookies.get('accessToken');
        // const refreshToken = Cookies.get('refreshToken');
    };

    return (
        <div className={styles.container}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <div className="label">
                        <label htmlFor="email">Email:</label>
                    </div>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <div className="label">
                        <label htmlFor="password">Password:</label>
                    </div>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.input}
                    />
                </div>
                <button type="submit" className={styles.button}>Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
