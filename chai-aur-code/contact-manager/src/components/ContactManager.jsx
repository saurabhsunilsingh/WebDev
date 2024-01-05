import { useState } from "react"
import AddContact from "./AddContact";
import ContactList from './ContactList'


export default function ContactManager(props) {
    const [contacts, setContacts] = useState(props.data)

    const addContact = (name) => {
        setContacts([...contacts, name]);
    }

    return <>
        <AddContact handleSubmit={addContact} />
        <ContactList data={contacts} />
    </>
}