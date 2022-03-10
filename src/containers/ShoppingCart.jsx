import React, { useContext }  from 'react'
import ShoppingCartItem from '../components/ShoppingCartItem'
import '../styles/ShoppingCart.scss'
import AppContext from '../context/AppContext'
// import Icons

import ArrowBackIcon from '@icons/arrow_back_black_24dp.svg'


const ShoppingCart = () =>{
    const {state} = useContext(AppContext)
    
    function totalSum () {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price
        const sum = state.cart.reduce(reducer,0)
        return sum 
    }


    return (
        <section className="shoppingCart">
        <div className="sc-resume">
            <header className="headerBar">
                <img className="backIcon" src={ArrowBackIcon} alt=""/>
                <h2>Shopping cart</h2>
            </header>
            <div className="sc-list">
                {state.cart.map(product => (
                    <ShoppingCartItem product = {product}  key={`orderItem-${product.id}`}/>

                ))}
            </div>
                <div className="summaryTotal">
                    <p className="total">Total </p>
                    <p className="value">$ {totalSum()}</p>
                </div>
                <a href="" className="checkOutButton"> <span>Checkout</span></a>

        </div>
        </section>
    )
}

export default ShoppingCart
