import { Link } from "@reach/router";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../App.css";

const ProductList = (props) => {
    const { hasBeenSubmittedDummy } = props;
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products")
            .then((response) => {
                console.log(response.data);
                setProducts(response.data);
            })
            .catch((err) => console.log(err));
    }, [hasBeenSubmittedDummy]);
    return (
        <>
            <h1>All Products</h1>
            {products.map((product, index) => (
                // <p key={index}>{product.title}</p>
                <div className="form-div" key={index}>
                    {" "}
                    <Link to={`${product._id}`}>{product.title}</Link>
                </div>
            ))}
        </>
    );
};

export default ProductList;