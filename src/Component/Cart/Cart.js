import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
             <h2>order Summary</h2>
                <h3>Selected Item: {cart.length}</h3>
        </div>
    );
};

export default Cart;