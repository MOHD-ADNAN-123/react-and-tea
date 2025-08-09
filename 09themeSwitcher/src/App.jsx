
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode ,setThemeMode] =useState("light")

  const lightTheme =()=>{
    setThemeMode("light")
  }

  const darkTheme =()=>{
    setThemeMode("dark")
  }

  //ACTUAL CHANGE IN THEME
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode ,lightTheme ,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    <ThemeBtn></ThemeBtn>
              </div>

              <div className="w-full max-w-sm mx-auto">             
                    <Card></Card>
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App


// npm install -D tailwindcss postcss autoprefixer
// npm install -D tailwindcss@3.4.17
// npx tailwindcss init -p