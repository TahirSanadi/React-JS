import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)

  //let counter=5
  const addValue =()=>{
    //counter = counter+1
    setCounter(counter+1)
    console.log("clicked",counter);
  }
  return (
    <>
     <h1>Tahir sanadi.....!</h1>
     <h2>Counter value:{counter}</h2>
     
     <button 
     onClick={addValue}>addValue{counter}</button>
     <br/>
     <br/>
     <button>removeValue{counter}</button> 

    </>
  )
}

export default App
