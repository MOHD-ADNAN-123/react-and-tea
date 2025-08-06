import React, { useEffect, useState } from 'react'

function Github(){
    const[data,SetData] =useState([])

    //whenever the component is loaded the useeffect will call
    useEffect(()=>{
        fetch('https://api.github.com/users/MOHD-ADNAN-123')
        .then(response => response.json())
        .then(data => {
            SetData(data)
        })
    },[])

    return (
        <div className ="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github Followers: {data.followers}</div>
    )
}

export default Github