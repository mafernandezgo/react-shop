import React from 'react'
import '../styles/PasswordRecovery.scss'

// import logo & icons
import logo from '@logos/logo_yard_sale.svg'

const PasswordRecovery = () => {
    return (
        <div className="passwordRecovery">
            <div className="pr-container"> 
                <img src={logo} alt="Yard Sale" className="pr-logo"/>   
                <h1 className="title">Password Recovery</h1>
                <p className="parragraph"> Inform the email address used to create your account</p>
                <form action="" className="form ">
                    <div className="inputbox">
                        <label for="email" className="label">Email address</label>
                        <input id="emai" type="email" className="input input-email" placeholder="camilayokoo@gmail.com" required />
                    </div>
                    <a className="primary-button submit-button" href="./mailSent.htm"> Submit</a>
                    <a className="end" href="./login.htm" >Back to log in</a>
                </form>
            </div>
        </div>
    )
} 

export default PasswordRecovery