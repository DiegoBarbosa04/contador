import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(5)

  return (
    <>
      <div className='App'>
        <img className='logo' src={reactLogo} alt="react-logo"/>
        <h1>Contador</h1>
        <span>{count}</span>
        <div className='buttons'>
          <button onClick={() => {count > 0 && setCount(count -1)}}>-</button>
          <button onClick={() => setCount(0)}>Resetar</button>
          <button onClick={() => setCount(count +1)}>+</button>
          </div>
          <p>Feito por Diego Barbosa</p>
      </div>
    </>
  )
}

export default App
