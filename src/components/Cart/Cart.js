import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce((total, prd) => total + prd.price, 0)
    let totalPrice = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        totalPrice = totalPrice + product.price;
    }

    let shipping = 0;
    if(totalPrice > 40){
        shipping = 0;
    }
    else if(totalPrice > 15){
        shipping = 4.99;
    }
    else if(totalPrice > 0){
        shipping = 12.99;
    }

    const tax = totalPrice / 10;

    const formatNumber = (num) =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }

    const totalPriceF = formatNumber(totalPrice);
    const shippingF = formatNumber(shipping);
    const taxF = formatNumber(tax);
    const grandTotalF = formatNumber(totalPriceF + shippingF + taxF);


    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {totalPriceF}</p>
            <p><small>Shipping Cost: {shippingF} </small></p>
            <p><small>VAT & TAX: {taxF}</small></p>
            <p>Total Price: $ {grandTotalF}</p>
        </div>
    );
};

export default Cart;