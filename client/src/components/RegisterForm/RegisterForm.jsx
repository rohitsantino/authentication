import React, { useState } from 'react';
import styles from './RegisterForm.module.css';
import { axios } from '@Axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const RegisterForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/v1/users/register', { firstName, lastName, email, password });
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("")
        toast("Successfully Registered!")
    };

    return (
        <div className={styles.register}>
            <div className={styles.container}>
                <h2>Register</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <div className="label">
                            <label htmlFor="firstName">First Name:</label>
                        </div>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <div className="label">
                            <label htmlFor="lastName">Last Name:</label>
                        </div>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <div className="labe">
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
                    <button type="submit" className={styles.button}>Register</button>
                    <div className="login" style={{ marginTop: `4px` }}>
                        <Link to='/'>Already have an account?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
