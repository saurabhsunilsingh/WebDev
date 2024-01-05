import { useState } from "react"

export default function AddContact(props) {
    const [contact, setContact] = useState("")

    function handleChange(e) {
        setContact(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.handleSubmit(contact);
        setContact("");
    }

    return <form onSubmit={handleSubmit}>
        <input
            type="text"
            name=""
            id=""
            placeholder="Add new contact"
            onChange={handleChange}
            value={contact} />
        <button type="submit">Add</button>
    </form>
}