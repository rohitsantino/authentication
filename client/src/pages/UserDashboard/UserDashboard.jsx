import React, { useContext, useEffect, useState } from 'react';
import {Navigation} from '@components/Navigation';
import {useNavigate} from 'react-router-dom';

export default function UserDashboard() {
  const navigate=useNavigate();
  return (
    <>
      <Navigation/>
      <button onClick={()=>navigate('/change-password')}>Change-Password</button>
    </>
  )
}
