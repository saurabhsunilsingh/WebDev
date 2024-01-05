

export default function Clicker({message,buttonText}) {
    function handleClick() {
        console.log(message)
    }
    return <div>
        {/* <h1>Click the button</h1> */}
       
        {/* <button onClick={ ()=>{console.log(message);alert(message)}}>{buttonText}</button> */}
        <button onClick={handleClick}>{buttonText}</button>
    </div>
}