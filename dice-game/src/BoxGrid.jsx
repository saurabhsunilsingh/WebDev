import { useState } from "react";
import Box from "./Box";
import "./BoxGrid.css"
export default function BoxGrid() {
    const [boxes, setBoxes] = useState([true, false, false, false, false, false, false, false, false]);
    
    const reset = () => {
        setBoxes([false, false, false, false, false, false, false, false, false]);
    }

    const toggleBox = (idx) => {
        setBoxes((oldBoxes) => {
            return oldBoxes.map((value, i) => {
                if (i === idx) {
                    return !value;
                } else {
                    return value
                }
            })
        })
    }

    return (
        <div className="BoxGrid">
            {boxes.map((b, idx) => (
                <Box isActive={b} toggle={() => toggleBox(idx)} />
            ))}
            <button onClick={reset} >Reset</button>
        </div>
    )
}