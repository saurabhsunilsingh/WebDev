import { useState } from "react";
import './Toggler.css'

export default function Toggler() {

    const [isHappy, setIsHappy] = useState(true);
    const [count, setCount] = useState(0);

    const toggleIsHappy = () => {
        setIsHappy(!isHappy)
    }

    const setIncrement = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <p className="Toggler" onClick={toggleIsHappy}>
                {isHappy ? "😊" : "😔"}
            </p>
            <p> 
                <h5>{count}</h5>
                <button onClick={setIncrement}>+</button>
            </p>
        </div>
    )
}