import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../components/navBar/Products'
import Contact from '../components/navBar/Contact'
import AboutUs from '../components/navBar/AboutUs'
import Profile from '../components/navBar/Profile'
import Notifications from '../components/navBar/Notifications'
import Cart from '../components/navBar/Cart'
import NotFound from '../components/navBar/NotFound'
import ProtectedRoutes from '../components/security/ProtectedRoutes'
import Login from '../pages/register/login'
import Signup from '../pages/register/Signup'
import Home from '../pages/Home'

const AppRoutes = () => {
    return (
        <>
            <Routes>
                
                <Route path='/' element={<Login />} />
                <Route path='/login' element={<Login />} />
                <Route path='/SignUp' element={<Signup />} />

                <Route element={<ProtectedRoutes />}>
                    <Route path='/Home' element={<Home />} />
                    <Route path='/Products' element={<Products />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/About-us' element={<AboutUs />} />
                    <Route path='/Profile' element={<Profile />} />
                    <Route path='/Notifications' element={<Notifications />} />
                    <Route path='/Cart' element={<Cart />} />
                    <Route path="*" element={<NotFound />} />
                </Route>

            </Routes>

        </>
    )
}

export default AppRoutes