import {useState ,useCallback, useEffect , useRef} from 'react'


function App() {
  const [length,SetLength] =useState(8)
  const [numberAllowed,SetNumber] =useState(false)
  const [characterAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] =useState("")

//useRef hook  ==> need to understand again
  const passwordRef =useRef(null)


  function copyPass(){
    window.navigator.clipboard.writeText(password)
  }

  //PASSWORD GENERATOR METHOD
  const passwordGenerator = useCallback(()=>{
    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789";
    if(characterAllowed) str +="@!#$%^&*"

    for (let index = 1; index <= length; index++) {
      let element = Math.floor(((Math.random() * (str.length - 1 + 1) + 1)))
      pass += str.charAt(element)
    }

    setPassword(pass)
  },[length,numberAllowed,characterAllowed])


  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,characterAllowed])


  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
    <h1 className="text-white text-center my-3">PASSWORD GENERATOR</h1>

    {/* Textbox */}
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="password"
        ref ={passwordRef}
      />
      <button onClick={copyPass} className="outline-none bg-orange-700 text-white px-3 py-0.5 shrink-0">
        copy
      </button>
    </div>

    {/* Slider and Checkbox */}
    <div className="flex text-sm gap-x-4 items-center">
      {/* Slider */}
      <div className="flex items-center gap-x-2">
        <input
          type="range"
          min={6}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e) => SetLength(Number(e.target.value))}
        />
        <label>Length: {length}</label>
      </div>

      {/* Checkbox */}
      <div className="flex items-center gap-x-2">
        <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => SetNumber((prev) => !prev)}
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      {/* checkbox */}
      <div className="flex items-center gap-x-2">
        <input
          type="checkbox"
          defaultChecked={characterAllowed}
          id="characterInput"
          onChange={() => setCharAllowed((prev) => !prev)}
        />
        <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
  </div>
    </>
  )
}

export default App


