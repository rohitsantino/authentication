import React, { useContext, useState } from 'react';
import { axios } from '@Axios';
import styles from './LoginForm.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '@context/IsLoggedinContext';
import { toast } from 'react-toastify';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const [hasError, setHasError] = useState(false);
    const [isLoggedin, setIsLoggedIn] = useContext(LoginContext)
    const navigate = useNavigate();

    const postLoginData = async () => {
        try {
            setHasError(false);
            const res = await axios.post('/api/v1/users/login', { email, password },
                {
                    headers: {
                        'withCredentials': true
                    }
                });
            if (res.status === 200) {
                console.log(isLoggedin);
                setIsLoggedIn(true);
                toast.success("Login successfull!");
                navigate('/user');
            }
        } catch (err) {
            setHasError(true);
            console.log(err.response?.data?.error?.message);
            setError(err.response?.data?.error?.message);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        localStorage.setItem('firstLogin', true);
        postLoginData();

    };

    return (
        <div className={styles.login}>
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
                    {hasError ? <div style={{ color: 'red', paddingBottom: `4px` }}>{error}</div> : null}
                    <button type="submit" className={styles.button}>Login</button>
                    <div className="signup" style={{ marginTop: `4px` }}>
                        <Link to='/register'>Don't have an account?Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
