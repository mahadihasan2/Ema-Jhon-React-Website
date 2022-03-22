import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Showp.css';

const Showp = () => {
    const [products,setProduct]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))


       
    },[])
    const addToCart=(product)=>{
        console.log(product)
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
               
               {
                 products.map(product=><Product 
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                 ></Product>)  
               }

            </div>
            <div className="cart-container">
                <h2>order Summary</h2>
            </div>
        </div>
    );
};

export default Showp;