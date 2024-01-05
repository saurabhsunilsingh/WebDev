import { useState } from "react";
import { getRolls } from "./utils";
import Dice from "./Dice";
import Button from './Button'

function LuckyN({ title = "Dice Game", numDice = 2, winCheck }) {
    console.log(typeof winCheck); // Check the type of winCheck
    const [dice, setDice] = useState(getRolls(numDice));
    const isWinner = winCheck(dice);
    console.log(typeof winCheck); // Check the type of winCheck
    const roll = () => {
        setDice(getRolls(numDice))
    }
    return (
        <main className="LuckyN">
            <h1>LuckyN </h1>
            <h2> {title} {isWinner && "You Win!"}</h2>
            <Dice dice={dice} />
            <button onClick={roll}>Re-Roll Dice</button>
            <Button clickFunc={roll} label="Re-Roll"/>

        </main>
        
    )
}


export default LuckyN;