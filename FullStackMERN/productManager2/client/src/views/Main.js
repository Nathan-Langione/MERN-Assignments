import React, { useEffect, useState } from 'react'

import axios from 'axios';
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                console.log(res);
                setProducts(res.data);
                setLoaded(true);
            });
    }, [loaded])
    const removeFromDom = productId => {
        // Lint wants !== instead of !=
        // eslint-disable-next-line
        setProducts(products.filter(product => product._id != productId));
    }
    const createProduct = product => {
        axios.post('http://localhost:8000/api/products', product)
            .then(res => {
                console.log(res);
                setLoaded(!loaded);
                setProducts([...products, res.data]);
            })
    }
    return (
        <div>
            <h1>Add a Product</h1>
            {/* {loaded && */}
            <ProductForm
                onSubmitProp={createProduct}
                initialTitle=""
                initialPrice=""
                initialDescription="" />{/* } */}
            <hr />
            <h1>Product List</h1>
            {loaded &&
                <ProductList
                    products={products}
                    removeFromDom={removeFromDom} />}
        </div>
    )
}
export default Main;
