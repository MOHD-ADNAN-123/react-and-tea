import React, {useContext} from 'react'
import UserContext from '../context/UserContext'
function Profile(){

    const {user} = useContext(UserContext)

    if(!user) return <div>Please Login</div>
    return <div>Welcome {user.username}
    <h2>Hello Mr {user.name}</h2>
    </div>

}
export default Profile