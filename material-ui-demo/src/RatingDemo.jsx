import Rating from "@mui/material/Rating";
import Slider from "@mui/material/Slider";
import { useState } from "react";

export default function RatingDemo() {
    const [score, setScore] = useState(3)
    const [volume, setVolume] = useState(50);
    return <>
        <div>
            <h1>Rating Demo. Current Score: {score}</h1>
            <Rating
                name="simple-controlled"
                value={score}
                onChange={(event, newValue) => {
                    setScore(newValue);
                }}
            />
            <h2>Volume:{volume}</h2>
            <Slider
                size="small"
                defaultValue={70}
                aria-label="Small"
                valueLabelDisplay="auto"
                value={volume}
                onChange={(event, newValue) => {
                    setVolume(newValue);
                }}
            />
        </div>
    </>
}