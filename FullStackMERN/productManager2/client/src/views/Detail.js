import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Detail = (props) => {
    const [productInfo, setProductInfo] = useState({});
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProductInfo({
                ...res.data
            }))
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            <h2>{productInfo.title}</h2>
            <p>{productInfo.price}</p>
            <p>{productInfo.description}</p>
        </div>
    )
}
export default Detail;
