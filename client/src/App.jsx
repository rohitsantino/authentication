import { useState } from 'react'
import './App.css';
import RouteHandler from './routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RouteHandler/>
    </>
  )
}

export default App
