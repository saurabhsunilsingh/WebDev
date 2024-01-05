import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactManager from './components/ContactManager'

function App() {
  const contact = [
    "Saurabh Singh",
    "Shreya Singh",
    "Sunil Singh",
    "Urmila Singh"
  ]
  return (
    <>
      <h1>Contact Manager</h1>
      <ContactManager data={contact} />
    </>
  )
}

export default App
