import React from 'react'
import '../styles/OrderItem.scss'


const OrderItem = ()=> {
    return (
        <div className="orderItem">
            <img className="oi-productImg" src="https://images.pexels.com/photos/793765/pexels-photo-793765.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
            <p className="oi-nameProduct"> Pomegranate </p>
            <h5 className="oi-price"> $  120.00 </h5>
        </div>
    )
} 

export default OrderItem