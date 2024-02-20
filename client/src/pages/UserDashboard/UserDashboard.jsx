import React, { useEffect, useState } from 'react';
import { axios } from '@Axios';

export default function UserDashboard() {
  const [user, setUser] = useState({});
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
    axios.post('/api/v1/users/logout')
  }
  return (
    <>
      <div>{user.firstName}</div>
      <button onClick={handleLogout}>logout</button>
    </>
  )
}
