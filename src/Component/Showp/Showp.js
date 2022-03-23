import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCard } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Showp.css';

const Showp = () => {
    const [products,setProduct]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))


       
    },[])
    const addToCart=(product)=>{
        // console.log(product)
        const newProduct = [...cart,product]
        setCart(newProduct)
        addToDb(product.id)
    }
    useEffect(()=>{
        const storedCart = getStoredCard()
        // console.log(stroedCart)
        const saveCard = []
        for(const id in storedCart){
            const addedProduct = products.find(product=>product.id===id)
            // console.log(addedProduct)
            if(addedProduct){
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
               saveCard.push(addedProduct)

            }
        }
        setCart(saveCard)
    },[products])

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
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Showp;