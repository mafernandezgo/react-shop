import React, { useContext } from 'react'
import '../styles/ProductItem.scss'
import AppContext from '../context/AppContext'
import addToCartIcon from '@icons/bt_add_to_cart.svg'



const ProductItem = ({product}) => {
    const {images,price,title,category} =product

    const { addToCart} = useContext(AppContext)
    

    const handleClick = (item) => {
        addToCart(item)
    }

    return (
        <div className="productItem">
            <img className="pi-img" src={images[0]} alt={title}/>
            <div className="pi-info"> 
                <div>
                    <h5 className="pi-price"> ${price} </h5>
                    <p className="pi-name"> {title} </p>
                    <p className="category"> {category.name} </p>
                </div>
                <img onClick={() => handleClick(product)} className="pi-addCartIcon" src={addToCartIcon} alt="add Cart Icon"/>
                
            </div>
        </div>
    )
}

export default ProductItem