
import './App.css'
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'
import Display from './components/Display'
function App() {
  

  return (
    <UserContextProvider>
      <h1>Learning context Api</h1>
      <Display/>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
