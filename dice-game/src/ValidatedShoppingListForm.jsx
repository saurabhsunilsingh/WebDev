import { useState } from "react";

export default function ValidatedShoppingListForm({ addItem }) {

    const [formData, setFormData] = useState({ product: "", quantity: "" })
    const [productIsValid, setProductIsValid] = useState(false);

    const validate = (product) => {
        if (product.length === 0) {
            setProductIsValid(false);
        } else {
            setProductIsValid(true);
        }
    }

    const handleChange = (evt) => {
        if (evt.target.name === "product") {
            validate(evt.target.value);
        }
        setFormData(currData => {
            return {
                ...currData,
                [evt.target.name]: evt.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (productIsValid) {
            addItem(formData);
            setFormData({ product: "", quantity: "" })
        }
        console.log("Submitted")
    }



    return <form onSubmit={handleSubmit}>
        {/* <h1>The product is {formData.product} and in quantity of {formData.quantity}.</h1> */}
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
        {!productIsValid && <h3 style={{ color: "red" }}> The Product cannot be empty !</h3>}
        <button>Submit</button>
    </form>
}