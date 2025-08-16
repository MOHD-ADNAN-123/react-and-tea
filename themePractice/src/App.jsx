import { ThemeProvider } from './context/themePContext'
import { useState } from 'react'
import ToggleButton from './components/ToggleButton';
import InfoCard from './components/InfoCard';
import { useEffect } from 'react';
import './App.css'

function App() {
  const [theme,SetTheme] = useState("light");
  function Light(){
    SetTheme("light")
  }
  function Dark(){
    SetTheme("dark")
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("light","dark");
    document.querySelector("html").classList.add(theme);
  },[theme]);

  return (
    <ThemeProvider value={{theme,Light,Dark}}>
      <ToggleButton />
      <InfoCard username ="Mohd Adnan"/>
      
    </ThemeProvider>
  )
}

export default App
