import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name, img, seller, price, stock} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className='product-name'>{name}</h3>
                <br />
                <p><small>by: {seller}</small></p>
                <br />
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button 
                className='main-button'
                onClick={() => props.handleAddProduct(props.product)}
                ><FontAwesomeIcon icon={faCartShopping} /> add to card</button>
            </div>
            
        </div>
    );
};

export default Product;