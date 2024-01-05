import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './components/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  }
    , [themeMode]
  )

  return (
    <>
      <ThemeProvider value={{ lightTheme, darkTheme, themeMode }}>

        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <h1 className="text-3xl text-center font-boldunderline mb-4">
              Course Card
            </h1>
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>

          </div>
        </div>
      </ThemeProvider>

    </>
  )
}

export default App
