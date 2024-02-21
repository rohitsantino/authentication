import React, { useContext, useEffect, useState } from 'react';
import { axios } from '@Axios';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '@context/IsLoggedinContext';
import styles from './Navigation.module.css';

const Navigation = () => {
  const [user, setUser] = useState({});
  const [setIsLoggedin] = useContext(LoginContext);
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const res = await axios.get('/api/v1/users/current-user');
      console.log(res.data);
      setUser(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  const handleLogout = () => {
    axios.post('/api/v1/users/logout').then(() => {
      console.log("Logout");
      setIsLoggedin(false);
      navigate('/');
    });
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>User Dashboard</div>
      <div className={styles.userInfo}>
        <span>Welcome, {user.firstName}</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navigation;
