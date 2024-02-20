import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import IsLoggedinContext from './context/IsLoggedinContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IsLoggedinContext>
      <App />
    </IsLoggedinContext>
  </React.StrictMode>,
)
