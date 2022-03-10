import React from 'react'
import OrderItem from '../components/OrderItem'
import '../styles/CheckOut.scss'

const CheckOut = () => {
    return (
        <section className="checkout">
            <div className="checkoutResume">
                <h2>My Order</h2>
                <div className="checkoutSummary">
                    <div>
                        <p> 04.25.2021</p>
                        <p> 4 articles</p>
                    </div>
                    <p className="checkoutValue">$  480.00</p>
                </div>
                <div className="list">
                    <OrderItem />
                </div>
            </div>
        </section>
    )
}

export default CheckOut
