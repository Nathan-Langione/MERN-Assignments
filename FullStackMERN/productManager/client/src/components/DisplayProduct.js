import React, { useState, useEffect } from "react";
import axios from "axios";

const DisplayProduct = (props) => {
    const { _id } = props;
    const [productInfo, setProductInfo] = useState({});
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${_id}`)
            .then((response) => {
                console.log(response.data);
                setProductInfo(response.data);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <div>
            <h2>{productInfo.title}</h2>
            <p>{productInfo.price}</p>
            <p>{productInfo.description}</p>
        </div>
    );
};

export default DisplayProduct;