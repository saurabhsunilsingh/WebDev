import { useState } from "react";
import "./ColorBox.css"


export default function ColorBox({ colors }) {

    function randomChoice(arr) {
        const idx = Math.floor(Math.random() * arr.length)
        return arr[idx];
    }

    // const [color, setColor] = useState("purple"); // we changed the initial color to a random color using the function created as it cann be reused.

    const [color, setColor] = useState(randomChoice(colors));
    const changeColor = () => {
        const randomColor = randomChoice(colors);
        setColor(randomColor);
    }

    return (
        <div
            className="ColorBox"
            onClick={changeColor}
            style={{ backgroundColor: color }}>
        </div>
    )
}