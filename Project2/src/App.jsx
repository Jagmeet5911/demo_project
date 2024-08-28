import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './assets/Component/Counter'
function App() {

  var [count, setCount] = useState(0);

  const handleInc =() => {

    setCount(count +1)

  }
  const handleDec =() => {

    if(count <=0) return

    setCount(count-1)


  }

  return (
    <>
      <h1> Count : {count}</h1>
      <div>
        <button onClick={handleInc}>Increase</button>
        <button onClick={handleDec}> Decrease</button>
      </div>
       
    </>
  )
}

export default App
