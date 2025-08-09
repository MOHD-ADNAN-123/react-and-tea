import React, { useState ,useContext } from "react";
import UserContext from '../context/UserContext'
function Display(){
     const {setUser} = useContext(UserContext)
     const [name ,SetName] = useState('');
    const NameSetter = (e)=>{
        e.preventDefault()
        setUser({name})
    }
    
    return(
        <>
        <input type="text" value = {name} onChange={(e)=>{SetName(e.target.value)}} placeholder="name"/>
        <button onClick ={NameSetter}>Submit</button>
        </>
    )
}
export default Display;