import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import ScoreKeeper from './ScoreKeeper'
import EmojiClicker from './EmojiClicker'
import PointKeeper from './PointKeeper'

function App() {


  return (
    <>
      <Counter />
      <ScoreKeeper />
      <EmojiClicker />
      <PointKeeper numPlayers={10} target={3} />
    </>
  )
}

export default App
