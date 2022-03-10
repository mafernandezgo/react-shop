import React from 'react'
import '../styles/Order.scss'
import arrowIcon from '@icons/flechita.svg'

const Order = () => {
    return (
        <div className="order">
            <div className="orderInfo">
                <p> 04.25.2021</p>
                <p> 4 articles</p>
            </div>
            <div>
                <p className="orderValue">$  480.00</p>
                <img src={arrowIcon} alt=""/>
            </div>
        </div>
    )
}

export default Order
