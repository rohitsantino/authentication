import React, { useState } from 'react';
import styles from './PasswordChangeForm.module.css';

const PasswordChangeForm = () => {
    const [currenPassword, setCurrenPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Current password:', currenPassword);
        console.log('newPassword:', newPassword);
    };

    return (
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
                        value={currenPassword}
                        onChange={(e) => setCurrenPassword(e.target.value)}
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <div className="label">
                        <label htmlFor="new-password">Password:</label>
                    </div>
                    <input
                        type="password"
                        id="new-password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className={styles.input}
                    />
                </div>
                <button type="submit" className={styles.button}>Login</button>
            </form>
        </div>
    );
};

export default PasswordChangeForm;
