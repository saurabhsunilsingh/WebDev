import { useState } from "react"

export default function SignupForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const updateUsername = (evt) => {
        setUsername(evt.target.value);
    }
    const updateFirstName = (evt) => {
        setFirstName(evt.target.value)
    }
    const updateLastName = (evt) => {
        setLastName(evt.target.value)
    }
    const handleSubmit = () => {
        console.log(firstName,lastName)
    }
    return (
        <div>
            <label htmlFor="firstName">First Name</label>
            <input
                type="text"
                placeholder="firstName"
                id="firstName"
                value={firstName}
                onChange={updateFirstName} />
            <br />
            <label htmlFor="lastName">Last Name</label>
            <input
                type="text"
                placeholder="lastName"
                id="lastName"
                value={lastName}
                onChange={updateLastName} />
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}