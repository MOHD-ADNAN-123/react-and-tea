import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //hook  ==> usestate() can take any value 
  //counter value
  //setcounter is to propogate the changes
  let [counter, setCounter] =useState(15)

  //COUNTER VARAIBLE
  //let counter=5;


  //ADD FUNCTION
  function addvalue(){
    if(counter<20){
      setCounter(counter+1)
    }
    
  }

  //DECREASE FUNCTION
  function decvalue(){
    if(counter>0){
      setCounter(counter-1)
    }
    
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter value: {counter}</h2>
      <button onClick= {addvalue}>INCREASE VALUE</button>
      <br/>
      <br/>
      <button onClick= {decvalue}>DECREASE VALUE</button>
      <p>counter value is :{counter}</p>
    </>
  )
}

export default App
