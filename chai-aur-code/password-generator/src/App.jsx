import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [hasNum, setHasNum] = useState(false)
  const [hasChar, setHasChar] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (hasNum) str += "0123456789";
    if (hasChar) str += "!@#$%^&*()_+-=~{}[]\:;<>?/";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      // console.log(pass)
    }
    setPassword(pass);
  }, [length, hasNum, hasChar, setPassword])

  const copyPastePasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();//no highlight after copy
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password);
  }, [password])
  const passwordRef = useRef(null);

  useEffect(() => {
    passwordGenerator()
  }, [length, hasChar, hasNum, passwordGenerator])

  return (
    <>
      <h1 className='text-4xl text-white'>Password Generator</h1>
      <div className='e-full  rounded-lg max-w-md mx-auto shadow-md px-4 py-4 my-8 text-orange-500 bg-gray-800'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef} />
          <button onClick={copyPastePasswordToClipboard} className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2 rounded-md'>

          <input
            type="range"
            value={length}
            min={6}
            max={100}
            className='cursor-pointer'
            id='range'
            onChange={(e) => { setLength(e.target.value) }} />

          <label htmlFor="range">Length: {length}</label>

          <input
            type="checkbox"
            id="hasNum"
            defaultChecked={hasNum}
            onChange={() => { setHasNum((prev) => !prev) }} />
          <label htmlFor="hasNum">Numbers</label>
          <input
            type="checkbox"
            id="hasChar"
            defaultChecked={hasChar}
            onChange={() => { setHasChar((prev) => !prev) }} />
          <label htmlFor="hasChar">Characters</label>

        </div>
      </div>

    </>
  )
}

export default App
