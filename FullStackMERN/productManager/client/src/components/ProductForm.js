import React, { useState } from 'react'
import axios from 'axios';
const ProductForm = () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        const newProductData = {
            title,
            price,
            desc,
        };
        //make a post request to create a new product
        axios
            .post("http://localhost:8000/api/product", newProductData)
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
    };
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br />
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
            </p>
            <p>
                <label>Price</label><br />
                <input type="number" step="0.01" min="0" onChange={(e) => setPrice(e.target.value)} />
            </p>
            <p>
                <label>Description</label><br />
                <input type="text" onChange={(e) => setDesc(e.target.value)} />
            </p>
            <input type="submit" />
        </form>
    )
}
export default ProductForm;

