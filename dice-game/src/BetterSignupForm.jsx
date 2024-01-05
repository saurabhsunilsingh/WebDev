import { useState } from "react"

export default function BetterSignupForm() {
    const [formData, setFormData] = useState({ firstName: "", lastName: "" });

    const handleChange = (evt) => {

        const changeFieldName = evt.target.name;
        const newValue = evt.target.value;

        setFormData(currData => { 
            // currData[changeFieldName] = newValue;
            // return { ...currData };
            return {
                ...currData,
                [changeFieldName] : newValue //same thing as above but in new syntax
            }
        })
    }

    const handleSubmit = () => {
        console.log(firstName.value, lastName.value, password.value)
    }
    return (
        <div>
            <label htmlFor="firstName">First Name</label>
            <input
                type="text"
                placeholder="firstName"
                id="firstName"
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
            />
            <br />
            <label htmlFor="lastName">Last Name</label>
            <input
                type="text"
                placeholder="lastName"
                id="lastName"
                name="lastName"
                onChange={handleChange}
                value={formData.lastName}
            />
            <br />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                placeholder="password"
                id="password"
                name="password"
                onChange={handleChange}
                value={formData.password}
            />
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}