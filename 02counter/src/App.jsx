import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);


  const addValue = () => {
    setCounter(counter + 1 > 20 ? 20 : counter + 1);
  }
  
  const decreaseValue = () => {
    setCounter(counter - 1 < 0 ? 0 : counter - 1);
  }

  return (
    <>
      <h1>Hola Roy !</h1>
      <h2>Counter Value : {counter}</h2>

      <button
      onClick={addValue}>
        Add Value
      </button>
      <br />
      <br />
      <button
      onClick={decreaseValue}
      >Decrease Value
      </button>
    </>
  )
}

export default App
