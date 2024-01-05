import { useState } from "react";

export default function PointKeeper({ numPlayers, target }) {
    const [points, setPoints] = useState(new Array(numPlayers).fill(0))
    function incrementPoint(idx) {
        // setPoints((prevPoints) => {
        //     const copyPoints = [...prevPoints]
        //     copyPoints[idx] += 1;
        //     return copyPoints;
        // })//more logical way

        setPoints((prevPoints) => {
            return prevPoints.map((points, indexCurrent) => {
                if (indexCurrent == idx) return points + 1;
                return points;
            })
        })//more raect-y way 

    }

    function reset() {
        setPoints(new Array(numPlayers).fill(0));
    }

    return (
        <div>
            <h1>Points Keeper</h1>
            <ul>
                {points.map((points, idx) => {
                    return <li key={idx}> Player {idx + 1} : {points}
                        <button onClick={() => incrementPoint(idx)}>+1</button>
                        {points >= target && "Winner"}
                    </li>
                })}
            </ul>
            <button onClick={reset}>Reset</button>
        </div>
    )
}