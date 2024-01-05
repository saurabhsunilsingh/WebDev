function Greeter({person="Everyone",from="Anonymous",rollNo="#"}){
    // console.log(props)
    // console.log(props.person)
    return (
    <>
    <h1> Hello there, Roll No. {rollNo} , {person} !</h1>
    <h2>    -{from}</h2>
    </>
    )
}
export default Greeter;
