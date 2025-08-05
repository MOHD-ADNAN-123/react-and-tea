

import './App.css'
import Animation from './components/animation'

function App() {
 


  //can pass obj, arrays and variables
  // let myObj ={
  //   username: "adnan",
  //   age:21
  // }
  return (
    <>
      <h1 className ='bg-green-400 text-black' >Tailwind test</h1>
      <Animation username ="MOHD" priceVal ={100} CardNo="#007"/>
      <Animation username = "ADNAN" priceVal={200} CardNo="#123"/>
      
    </>
  )
}

export default App
