import React, { useEffect, useState } from 'react';
import {axios} from '@Axios';

export default function UserDashboard() { 
    const[user,setUser]=useState({});
    const getUser=async()=>{
        try {
            await axios.get('/api/v1/users/').then((res)=>{
                setUser(res.data);
                console.log(res.data);
            })
        } catch (error) {
            
        }
    }

  useEffect(()=>{
    getUser();
  },[])
  return (
    <div>Hello</div>
  )
}
