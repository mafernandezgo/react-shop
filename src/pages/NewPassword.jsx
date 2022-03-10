import React from 'react'
import '../styles/NewPassword.scss'

// import logo & icons
import logo from '@logos/logo_yard_sale.svg'

const NewPassword = () => {
    return (
        <div className="login">
            <div className="np-container"> 
                <img src={logo} alt="Yard Sale" className="np-logo"/>
                <h1 className="title">Create a new password</h1>
                <p className="parragraph"> Enter a new password for your account</p>
                <form action="" className="form ">
                    <div className="inputbox">
                        <label for="password" className="label">Password</label>
                        <input id="password" type="password" className="input input-password" placeholder="************" required />
                    </div>
                    <div className="inputbox">
                        <label for="re-password" className="label">Re-enter Password</label>
                        <input id="password" type="password" className="input input-password" placeholder="************" required />
                    </div>
                    <a className="primary-button submit-button" href="./login.htm"> Confirm new password</a>
                </form>
            </div>
        </div>

    )
}

export default NewPassword