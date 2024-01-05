import { useState } from 'react';

export default function Increment() {

    const [num, setNum] = useState(5);
   
    function setIncrement() {
        setNum(num + 1)
        console.log(num);
    }

    return (
        <>
            <h1>The Count is :{num} </h1>
            <button onClick={setIncrement}>Increment</button>
        </>
    )
}