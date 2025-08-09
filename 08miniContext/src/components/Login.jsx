import React,{useState ,useContext} from 'react'
import UserContext from '../context/UserContext'
function Login(){
    const[username, Setusername] = useState('')
    const[Password, Setpassword] =useState('')

    const {setUser} = useContext(UserContext)


    //this is how to send the data
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,Password})
        window.navigator.clipboard.writeText(username)
    }

    return(
        <div>
            <h2>Login</h2>

            <input type ="text" 
            value ={username}
            onChange= {(e)=>Setusername(e.target.value)}  //This is an event handler. It runs whenever you type something in the input field
            placeholder="username"
            />

            <input type ="text"
            value ={Password}
            onChange= {(e)=>Setpassword(e.target.value)}
            placeholder ="password"/>

            <button onClick ={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login