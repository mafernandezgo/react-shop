import React, { useRef } from 'react'
import '../styles/Login.scss'

// import Icons & Logos
import logo from '@logos/logo_yard_sale.svg'

const Login = ( ) => {
    const form = useRef(null)

    const handleSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData(form.current)
        const dataobj = {
            username: formData.get('email'),
            password: formData.get('password')
        }
        console.log(dataobj)
    }


    return (
        <div className="login">
            <div className="loginContainer"> 
                <img src={logo} alt="Yard Sale"/>
                <form action="" className="loginForm" ref={form}>
                    <div className="inputbox">
                        <label htmlFor="email"  className="label">Email address</label>
                        <input id="emai" name='email' type="email" className="input input-email" placeholder="camilayokoo@gmail.com" required/>
                    </div>
                    <div className="inputbox">
                        <label htmlFor="password" className="label">Password</label>
                        <input id="password" name="password" type="password" className="input input-password" placeholder="************" required/>
                    </div>
                    <p className="errormsg">Invalid user ID and password combination</p>
                    <button 
                        onClick={handleSubmit} 
                        className="login-button"> 
                        Log in
                    </button>
                    <a>Forgot my password</a>
                </form>
                <button 
                    href="./createAccount.html" 
                    className="singup-button">
                    Sing up
                </button>
            </div>
        </div>
    )
    }

export default Login
