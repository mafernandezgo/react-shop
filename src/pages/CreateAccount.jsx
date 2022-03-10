import React from 'react'
import '../styles/CreateAccount.scss'

const CreateAccount = () => {
    return (
        <div className="createAccount">
            <div className="container">
                <h1> My account</h1>
                <label for="name" className="label">Name</label>
                <input id="name" type="text" className="input input-email" placeholder="Camila Yokoo" required/>

                <label for="email" className="label">Email address</label>
                <input id="emai" type="email" className="input input-email" placeholder="camilayokoo@gmail.com" required/> 
            
                <label for="password" className="label">Password</label>
                <input id="password" type="password" className="input input-password" placeholder="************" required/>

                <a href="" className="createButton">Create</a>
            </div>
        </div>
    )
}

export default CreateAccount