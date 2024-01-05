import { useState, useEffect } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("")

    useEffect(function myEffect() {
        console.log("MyEffect is executed")

    },
        [count]
    )
    const increment = () => {
        setCount((c) => (c + 1));
    }

    const handleChange = (evt) => {
        setName(evt.target.value);
    }

    return <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}> Add 1</button>
        <p>Name : {name}</p>
        <input value={name} onChange={handleChange} type="text" />
    </div>
}

