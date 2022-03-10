import React, {useState, useContext} from 'react'
import '@styles/Header.scss'

import Menu from '@components/Menu'
// import '../../public/YardSale_Icons/'
import logo from '@logos/logo_yard_sale.svg'
import menuIcon from '@icons/icon_menu.svg'
import shoppingCartIcon from '@icons/icon_shopping_cart_notification.svg'
import AppContext from '../context/AppContext'
import ShoppingCartItem from './ShoppingCartItem'
import ShoppingCart from '../containers/ShoppingCart'
import useGetProducts from '../hooks/useInitialState'
import { Link } from 'react-router-dom'


const Header = () =>{
    const [toggle, setToggle] = useState(false)
    const [toggleCartList, setToggleCartList] = useState(false)
    const { state } = useContext(AppContext)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    function btnCategoryLtnr (e) {
        let btnCategory = e.target.dataset.btn
        console.log(btnCategory)
        return btnCategory
    }
    

    return (
        <div>
            <nav className="bar-nav-mobile">
                <img src={menuIcon} alt="" className="menuIcon icon" onClick={handleToggle}/>
                <img src={logo} alt="" className="logo"/>
                <div onClick={() => setToggleCartList(!toggleCartList)}>
                    <img src={shoppingCartIcon} href="" className="shoppingCartIcon icon" />
                    <p className='itemsCounter'>
                        {state.cart.length > 0 ? state.cart.length : null}
                    </p>
                </div>
            </nav>
            
        
            <nav className="bar-nav">
                <div className="bar-nav-items">
                    <Link to ="/"><img src={logo} className="logo" alt="Yard Sale"/></Link>
                    <a onClick={btnCategoryLtnr} data-btn="All" className="a-nav"> All</a> 
                    <a onClick={btnCategoryLtnr} data-btn="Clothes" className="a-nav">Clothes</a>
                    <a onClick={btnCategoryLtnr} data-btn="Electronics"  className="a-nav">Electronics</a>
                    <a onClick={btnCategoryLtnr} data-btn="Furniture"  className="a-nav">Funiture</a>
                    <a onClick={btnCategoryLtnr} data-btn="Toys" className="a-nav">Toys</a>
                    <a onClick={btnCategoryLtnr} data-btn="Others"  className="a-nav">Others</a>
                </div>
                <div className="bar-nav-items">
                    <p href="" className="a-nav signin" onClick={handleToggle}>Sing in</p>
                    <div onClick={() => setToggleCartList(!toggleCartList)}>
                        <img src={shoppingCartIcon} href="" className="shoppingCartIcon" alt="Shopping Cart" />
                        <p className='itemsCounter'>
                            {state.cart.length > 0 ? state.cart.length : null}
                        </p>
                    </div>
                </div>
                
            </nav>
                {toggle && <Menu />}
                {toggleCartList && <ShoppingCart />}
        </div>
    )
} 

export default Header