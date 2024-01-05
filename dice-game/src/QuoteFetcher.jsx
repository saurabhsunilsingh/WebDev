import { useState, useEffect } from "react";
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random"


export default function QuoteFetcher() {
    const [quote, setQuote] = useState({ text: "", quote: "" });

    // useEffect(() => {
    //     async function getInitialQuote() {
    //         const response = await fetch(RANDOM_QUOTE_URL);
    //         const jsonResponse = await response.json();
    //         const randomQuote = jsonResponse.quote;
    //         // console.log(randomQuote)
    //         setQuote(randomQuote);
    //     }
    //     getInitialQuote();
    // },
    //     [] // empty square brackets mean that the effect gets run only once 
    // )

    useEffect(() => {
        fetchQuote() // same thing as above but smaller syntax as its declared outside 
        //Also it weird but we cannot pass asynchronous function to the use Effect hence we wrap our 
        //function in a synchronous function to invoke async function inside and give [] to execute it once
    }, [])

    async function fetchQuote() {
        const response = await fetch(RANDOM_QUOTE_URL);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;
        // console.log(randomQuote)
        setQuote(randomQuote);
    }

    return <div>

        <h1>{quote.text}</h1>
        <h3>{quote.author}</h3>
        <button onClick={fetchQuote}> Generate Quote</button>

    </div>
}