import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from '../containers/layout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import PasswordRecovery from '../pages/PasswordRecovery'
import MailSent from '../pages/MailSent'
import NewPassword from '../pages/NewPassword'
import CreateAccount from '../pages/CreateAccount'
import MyAccount from '../pages/MyAccount'
import CheckOut from '../pages/CheckOut'
import Orders from '../pages/Orders'
import NotFound from '../pages/NotFound'
import AppContext from '../context/AppContext'

import ShoppingCart from '../containers/ShoppingCart'
import useInitialState from '../hooks/useInitialState'

import '../styles/global.css'


const App = () => {
    const initialState = useInitialState()
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route exact path="/newPassword" element={<NewPassword/>} />
                        <Route exact path="/passwordRecovery" element={<PasswordRecovery/>} />
                        <Route exact path="/createAccount" element={<CreateAccount/>} />
                        <Route exact path="/myAccount" element={<MyAccount/>} />
                        <Route exact path="/login" element={<Login/>} />
                        <Route exact path="/orders" element={<Orders/>} />
                        <Route exact path="/checkout" element={<CheckOut/>} />
                        <Route exact path="/mailSent" element={<MailSent/>} />
                        <Route exact path="/shoppingCart" element={<ShoppingCart/>} />
                        <Route exact path="*" element={<NotFound/>} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App