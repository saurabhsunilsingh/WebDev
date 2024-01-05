
export default function DoubleDice() {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    const isWinner =num1===num2;
    const styles ={color: isWinner ? "green":"red"}
    return (
    <div className="DoubleDice" style={styles}>
        <h2>Double Dice</h2>
        { isWinner && <h3>You Win !!</h3>} 
        <p>Number 1 is : {num1}</p>
        <p>Number 2 is : {num2}</p>
    </div>
    )
}






// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
    
//     return <div>
//         <h2>Double Dice</h2>
//         <h3>{num1===num2 ? "You Win !!":null}</h3>
//         <p>Number 1 is : {num1}</p>
//         <p>Number 2 is : {num2}</p>
//     </div>
    
// }





// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
    
//     return <div>
//         <h3>{num1===num2 ? "You Win":"You Lose"} !!</h3>
//         <p>Number 1 is : {num1}</p>
//         <p>Number 2 is : {num2}</p>
//     </div>
    
// }


// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
//     const result= num1===num2 ? "You Win":"You Lose";
//     return <div>
//         <h3>{result} !!</h3>
//         <p>Number 1 is : {num1}</p>
//         <p>Number 2 is : {num2}</p>
//     </div>
    
// }