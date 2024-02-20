import { useContext, useEffect } from 'react';
import './App.css';
import { axios } from '@Axios';
import RouteHandler from '@routes';
import { LoginContext } from '@context/IsLoggedinContext';

function App() {
  const [isLoggedin] = useContext(LoginContext);
  useEffect(() => {
    if (isLoggedin != true) {
      return;
    }
    let timeInterval;
    timeInterval = setInterval(() => {
      axios.get('/api/v1/users/refresh-token')
    }, [25000]);
    return () => clearInterval(timeInterval);
  }, [isLoggedin])
  return (
    <>
      <RouteHandler />
    </>
  )
}

export default App
