import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Slots from './Slots'
function App() {


  return (
    <div>
      <h1 style={{color:"aquamarine"}}>
        Slot Machine
      </h1>
      <Slots val1="A" val2="B" val3="A" />
      <Slots val1="A" val2="A" val3="A" />
      <Slots val1="A" val2="a" val3="A" />
      <Slots val1="A" val2="b" val3="A" />
      <Slots val1="B" val2="B" val3="B" />
      <Slots val1="b" val2="B" val3="b" />

    </div>
  )
}

export default App
