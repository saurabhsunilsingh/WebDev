function handleOnSubmit(evt) {
    evt.preventDefault();
    console.log("Submitted the Form!")
}


export default function Form() {
    return (
        <form onSubmit={handleOnSubmit}>
            <button>Submit</button>
        </form>
    )
}