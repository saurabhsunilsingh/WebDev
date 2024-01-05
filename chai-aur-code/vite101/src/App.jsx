import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  let [count, setCount] = useState(0);
  let [color, setColor] = useState("wheat");



  const increaseCounter = () => {
    count = count + 1;
    console.log(count)
    setCount(count);
  }

  const decreaseCounter = () => {
    setCount(count - 1);
  }

  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
        {/* <h1 className='bg-green-400 mb-4'>Hello There</h1>
        <button onClick={increaseCounter}>Click Up {count}</button>
        <button onClick={decreaseCounter}>Click Down {count}</button>
        <Card name="Saurabh" btnText="click me"/>
        <Card name="Singh" btnText="press me"/> */}


        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 bg-slate-500 rounded m-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl m-2'>
            <button className='outline-none px-4 bg-red-500 rounded' onClick={()=>{setColor("Red")}}>Red</button>
            <button className='outline-none px-4 bg-green-500 rounded' onClick={()=>{setColor("Green")}}>Green</button>
            <button className='outline-none px-4 bg-blue-500 rounded' onClick={()=>{setColor("Blue")}}>Blue</button>
            <button className='outline-none px-4 bg-yellow-500 rounded' onClick={()=>{setColor("Yellow")}}>Yellow</button>
            <button className='outline-none px-4 bg-pink-500 rounded' onClick={()=>{setColor("Pink")}}>Pink</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
