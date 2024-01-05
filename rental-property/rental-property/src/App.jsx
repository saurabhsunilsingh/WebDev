import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RentalProperty from './RentalProperty'
import Clicker from './Clicker'
import Form from './Form'
import Increment from './Increment'
import Toggler from './Toggler'
import ColorBox from './ColorBox'
import ColorBoxGrid from './ColorBoxGrid'

function App() {
  const properties = [
    { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
    { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
    { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
    { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
    { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
    { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
  ];
  const colors = [
    "red",
    "green",
    "yellow",
    "blue",
    "orange",
    "teal",
    "wheat",
    "purple"
  ]
  return (
    <>
      {/* <RentalProperty properties={properties} /> */}
      {/* <Form/> */}
      {/* <Clicker message="Hello There!" buttonText="Please Click Me !"/> */}
      {/* <Increment/> */}
      {/* <Toggler/> */}
      {/* <ColorBox colors={colors} /> */}
      <ColorBoxGrid colors={colors}/>

    </>
  )
}

export default App
