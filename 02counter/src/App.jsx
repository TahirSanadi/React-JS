import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0)

  //let counter=5
  const addValue =()=>{
    //counter = counter+1
    if(counter<20){
      setCounter(counter+1)
    console.log("clicked",counter);
    }
    else{
      alert('you cannot go beyond 20')
    }
    
  }

  const removeValue=()=>{
    if(counter==0){
      alert('you cannot go in negetive')
      console.log("clicked",counter);
    }
    else{
      setCounter(counter-1)
    }
  }
  const setZero=()=>{
    setCounter(counter=0)
  }
  return (
    <>
     <h1>Tahir sanadi.....!</h1>
     <h2>Counter value:{counter}</h2>
     
     <button 
     onClick={addValue}>addValue{counter}</button>
     <br/>
     <br/>
     <button
     onClick={removeValue}>removeValue{counter}</button>
     <br/>
     <br/>
     <button
     onClick={setZero}>setZero</button> 

    </>
  )
}

export default App
