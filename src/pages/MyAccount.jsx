import React from 'react'
import '../styles/MyAccount.scss'

// import logo & icons
import logo from '@logos/logo_yard_sale.svg'

const MyAccount = () => {
    return (
        <div className="myAccount">
            <div className="ma-container">
            <img src={logo} alt="Yard Sale" className="ma-logo"/>
            <form className="ma-form">
                <h1> My account</h1>
                <label className="label">Name</label>
                <p className="p-text"> Camila Yokoo</p>
                <label className="label">Email address</label>
                <p className="p-text"> camilayokoo@gmail.com</p>
                <label className="label">Password</label>
                <p className="p-text"> ********** </p>
                <a href="" className="edit-button">Edit</a>
            </form>
            </div>
        </div>
    )
}

export default MyAccount
