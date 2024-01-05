import { useState } from "react";
import {v4 as uuid} from "uuid"

import ShoppingListForm from "./ShoppingListForm";
import ValidatedShoppingListForm from "./ValidatedShoppingListForm";

export default function ShoppingList() {
    const [items, setItems] = useState([
        { id: uuid(), product: "Banana", quantity: 8 },
        { id: uuid(), product: "Apple", quantity: 2 }
    ])

    const addItem = (item) => {

        setItems((currItems => {
            return [...currItems, { ...item, id: uuid() }] //we are adding the current item to the items array copy using setItems 
        }))
        return
    }

    return <div>
        <h1>Shopping List</h1>
        <ul>
            {items.map(e => <li key={e.id}>{e.product} - {e.quantity}</li>)}
        </ul>
        <ValidatedShoppingListForm addItem={addItem} />
        {/* addItem is not supposed to match  */}

    </div>
}