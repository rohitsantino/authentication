import React, { useContext, useState } from 'react';
import { axios } from '@Axios';
import styles from './PasswordChangeForm.module.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const PasswordChangeForm = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        toast("Password Changed");
        axios.post('/api/v1/users/update-password', { currentPassword, newPassword }).then(
            () => navigate('/')
        ).catch(
            (err) => {
                setHasError(true);
                setError(err.response?.data?.error?.message);
            }
        )
    };

    return (
        <div className={styles.passwordChange}>
            <div className={styles.container}>
                <h2>Change Password</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <div className="label">
                            <label htmlFor="current-password">Current Password:</label>
                        </div>
                        <input
                            type="password"
                            id="current-password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <div className="label">
                            <label htmlFor="new-password">New Password:</label>
                        </div>
                        <input
                            type="password"
                            id="new-password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                    {hasError ? <div style={{ color: 'red', paddingBottom: `4px` }}>{error}</div> : null}
                    <button type="submit" className={styles.button}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default PasswordChangeForm;
