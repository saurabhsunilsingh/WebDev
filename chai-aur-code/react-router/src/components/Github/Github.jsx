import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";
export default function Github() {
    // const [data, setData] = useState({});

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         }
    //         )
    // }, [])

    const data = useLoaderData()

    return (
        <div className="text-center m-4 bg-gray-500 text-white">
            Github Followers:{data.followers}
            <div>
                <img src={data.avatar_url} alt="dp" width={300} />
            </div>
        </div>
    )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    console.log(response)
    return response.json()
}