import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pets from "./Pets"
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'
import Heading from './Heading'
import ColorList from './ColorList'
import ShoppingList from './ShoppingList'


const data = [
  { id: 1, item: "eggs", quantity: 12, completed: false },
  { id: 2, item: "milk", quantity: 1, completed: true },
  { id: 3, item: "chicken", quantity: 4, completed: false },
  { id: 4, item: "carrots", quantity: 6, completed: true },
  { id: 5, item: "curd", quantity: 2, completed: false }
]


function App() {

  return (
    <div>
      {/* <Greeter person="Bill" from="Saurabh" rollNo={1}/>
      <Pets />
      <Greeter person="Jill" from="Sam" rollNo={21}/> 
      <Pets />
      <Greeter person="Will" from="Beast" rollNo={121} />
      <Pets />
      <hr/>
      <Die name="Candice" diceFace={20}/>
      <Die diceFace={10}/>
      <Die diceFace={6}/>
      <hr/>
      <ListPicker values={[1,2,3]}/>
      <ListPicker values={["Bill","Jill","Will"]}/>
      <Heading color="magenta" text="Heading @ the Head !!" fontSize="20px"/>
      <DoubleDice/>
      <DoubleDice/>
      <hr/>
      <ColorList colors={["red","pink","purple","green"]}/>
      <ColorList  colors={["teal","yellow","aquamarine","wheat"]}/> */}
      <hr />
      <ShoppingList items={data} />

    </div>
  )
}

export default App
