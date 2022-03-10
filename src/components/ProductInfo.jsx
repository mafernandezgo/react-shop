import React from 'react'
import '../styles/productInfo.scss'
import addToCart from '@icons/bt_add_to_cart.svg'

const ProductInfo = () => {
    return (
    
            <div className="cardProductInfo">
                <img className="productInfoImg" src="https://images.pexels.com/photos/793765/pexels-photo-793765.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                <div className="circles">
                    <div className="circle"> </div>
                    <div className="circle"> </div>
                    <div className="circle"> </div>
                </div>
                <div className="productMoreInfo"> 
                    <div>
                        <h5 className="price"> $  120.00 </h5>
                        <p className="name-product"> Pomegranate </p>
                    </div>
                    <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <a href="" className="add">
                        <img className="addCartIcon" src={addToCart}/> 
                        <span>Add to cart</span>
                    </a>
                </div>
            </div>  
    )
}

export default ProductInfo