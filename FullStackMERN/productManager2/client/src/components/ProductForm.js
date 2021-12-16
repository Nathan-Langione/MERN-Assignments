import React, { useState } from "react";
import { navigate } from '@reach/router';

const ProductForm = (props) => {
    const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);
    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ title, price, description });
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="form-div">
                <label>Title</label><br />
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="form-div">
                <label>Price</label><br />
                <input
                    type="text"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div className="form-div">
                <label>Description</label><br />
                <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <input type="submit" />
        </form>
    );
};

export default ProductForm;