import { useState } from "react";

export default function ShoppingListForm({ addItem }) {

    const [formData, setFormData] = useState({ product: "", quantity: "" })
    const handleChange = (evt) => {
        setFormData(currData => {
            return {
                ...currData,
                [evt.target.name]: evt.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(formData);
        setFormData({ product: "", quantity: "" })
        console.log("Submitted")
    }

    return <form onSubmit={handleSubmit}>
        <h1>The product is {formData.product} and in quantity of {formData.quantity}.</h1>
        <label htmlFor="product">Product</label>
        <input
            type="text"
            placeholder="product name"
            name="product"
            id="product"
            value={formData.product}
            onChange={handleChange}
        />
        <br />
        <label htmlFor="quantity">Quantity</label>
        <input
            type="number"
            placeholder="0"
            name="quantity"
            id="quantity"
            value={formData.quantity}
            onChange={handleChange}

        />
        <br />
        <button>Submit</button>
    </form>
}