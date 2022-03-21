import React, { useEffect, useState } from 'react';
import './Showp.css';

const Showp = () => {
    const [products,setProduct]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])

    return (
        <div className='shop-container'>
            <div className="product-container">
                <h1>shop container and products leangth: {products.length}</h1>

            </div>
            <div className="product-container">
                <h2>order Summary</h2>
            </div>
        </div>
    );
};

export default Showp;