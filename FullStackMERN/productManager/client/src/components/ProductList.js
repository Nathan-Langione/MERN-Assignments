import React from 'react'
const ProductList = (props) => {
    return (
        <div>
            {props.product.map((product, idx) => {
                return <p key={idx}>{product.title}</p>
            })}
        </div>
    )
}
export default ProductList;

