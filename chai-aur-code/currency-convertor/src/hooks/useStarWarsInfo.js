import { useEffect, useState } from "react";

export default function useStarWarsInfo() {


    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://swapi.dev/api/people/`)
            .then((res) => res.json())
            .then((res) => setData(res))
        console.log("here is ",data)
    }, [])
    console.log("out of loop",data);
    return data;
}