import React, { useContext, useEffect, useState } from 'react';
import { axios } from '@Axios';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '@context/IsLoggedinContext';

export default function UserDashboard() {
  const [user, setUser] = useState({});
  const[isLoggedin,setIsLoggedIn]=useContext(LoginContext);
  const navigate=useNavigate();
  const getUser = async () => {
    try {
      const res = await axios.get('/api/v1/users/current-user');
      console.log(res.data);
      setUser(res.data)
    } catch (error) {

    }
  }

  useEffect(() => {
    getUser();
  }, []);

  const handleLogout=()=>{
    axios.post('/api/v1/users/logout').then(()=>{
      localStorage.setItem('firstLogIn',false);
      setIsLoggedIn(false);
      navigate('/');
    });
  }
  return (
    <>
      <div>{user.firstName}</div>
      <button onClick={handleLogout}>logout</button>
    </>
  )
}
