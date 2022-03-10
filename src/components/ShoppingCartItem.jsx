import React,{ useContext } from 'react'
import '../styles/ShoppingCartItem.scss'
import AppContext from '../context/AppContext'

// import Icons

import iconClose from '@icons/icon_close.png'


const ShoppingCartItem = ({product})=> {
    const {removeFromCart } = useContext(AppContext)

    const handleRemove = product => {
        removeFromCart(product)
    }


    return (
        <div className="shoppingCartItem">
            <img className="sci-productImg" src={product.images[0]} alt={product.title}/>
            <p className="sci-nameProduct"> {product.title} </p>
            <h5 className="sci-price"> $  {product.price} </h5>
            <img className="sci-closeIcon" src={iconClose} alt="" onClick={() => handleRemove(product)}></img>
        </div>
    )
} 

export default ShoppingCartItem