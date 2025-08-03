import {useState} from "react"

function App() {
  //hooks to propogate the changes in ui
  const [color,setcolor] =useState("olive")
  return (
    <div className="w-full h-screen" style={{backgroundColor: color}}>
      <div className ="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick ={()=> setcolor("red")}>Red</button> 
        </div>
        <div className="flex flex-wrap justify center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick ={()=> setcolor("Black")}>Black</button>
        </div>
        <div className="flex flex-wrap justify center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick ={()=> setcolor("Blue")}>Blue</button>
        </div>
        <div className="flex flex-wrap justify center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick ={()=> setcolor("Green")}>Green</button>
        </div>
        <div className="flex flex-wrap justify center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick ={()=> setcolor("Brown")}>Brown</button>
        </div>
        <div className="flex flex-wrap justify center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick ={()=> setcolor("Yellow")}>yellow</button>
        </div>
      </div>
    </div>
  )
}

//can be used also inplace of arrow function
// function handleClick(color) {
//   setColor(color);
// }

// <button onClick={() => handleClick("red")}>Red</button>
// <button onClick={() => handleClick("blue")}>Blue</button>

export default App
