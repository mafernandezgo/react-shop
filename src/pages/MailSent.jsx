import React from 'react'
import '../styles/MailSent.scss'

// import logo & icons
import logo from '@logos/logo_yard_sale.svg'
import mailIcon from '@icons/email.svg'


const MailSent = () => {
    return (
        <div className="mailSent">
            <div className="ms-container"> 
                <img src={logo} alt="Yard Sale" className="logo"/>
                <h1 className="title">Email has been sent!</h1>
                <p className="parragraph"> Please check your inbox fot instructions on how to reset the password </p>

                <div className="ms-form">
                    <div className="container-icon">
                        <img src={mailIcon} alt="" className="msgicon"/>
                    </div>
                    <a className="login-button" href="./login.htm"> Login</a>
                    <p> Didn't receive the email? <a className="end" href="">Resend</a></p>
                </div>
        
            </div>
        </div>
    )
}

export default MailSent