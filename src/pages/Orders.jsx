import React from 'react'
import Order from '../components/Order'
import '../styles/Orders.scss'

const Orders = () => {
    return (
        <section className="orders">
            <div className="ordersResume">
                <h2>My Orders</h2>
                <div className="orderList">
                    <Order />
                </div>
            </div>
        </section>
    )
}

export default Orders