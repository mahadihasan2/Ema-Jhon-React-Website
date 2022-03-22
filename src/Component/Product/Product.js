import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props.Product)
    // const {addToCart} = props 
    const { name, img, seller, price, ratings } = props.product
//    console.log(props)

    return (
        <div className='img-product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p><small>{seller}</small></p>
            <p>Price: ${price}</p>
            <p><small>Ratings: {ratings} Starts</small></p>

            </div>
            <button className='btn-name' onClick={()=>props.addToCart(props.product)}>
                <p>Add to card</p>
            </button>
        </div>
    );
};

export default Product;