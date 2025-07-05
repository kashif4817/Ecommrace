import { Routes, Route } from 'react-router-dom';
import Login from '../pages/register/Login';
import Signup from '../pages/register/Signup';

import Home from '../components/navBar/Home';
import Products from '../components/navBar/Products';
import Contact from '../components/navBar/Contact';
import AboutUs from '../components/navBar/AboutUs';
import Profile from '../components/navBar/Profile';
import Notifications from '../components/navBar/Notifications';
import Cart from '../components/navBar/Cart';
import ProtectedRoutes from './ProtectedRoutes';
import MainHomePage from '../components/MainHomePage';
import { Orders } from '../components/sideBar/Orders';
import Settings from '../components/sideBar/Settings';
import Logout from '../components/sideBar/Logout';
import NotFound from '../pages/NotFound';
import { PublicRoute } from './PublicRoute';
import LikedProducts from '../components/sideBar/LikedProducts';


const NavRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PublicRoute> <Login /> </PublicRoute>} />
            <Route path="/login" element={<PublicRoute> <Login /> </PublicRoute>} />
            <Route path="/signup" element={<PublicRoute> <Signup /> </PublicRoute>} />

            <Route
                path="/home"
                element={
                    <ProtectedRoutes>
                        <Home />
                    </ProtectedRoutes>
                }>
                <Route index element={<MainHomePage />} />
                <Route path="products" element={<Products />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about-us" element={<AboutUs />} />
                <Route path="profile" element={<Profile />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="cart" element={<Cart />} />

                <Route path='orders' element={<Orders />} />
                <Route path='likes' element={<LikedProducts />} />
                <Route path='settings' element={<Settings />} />
                <Route path='logout' element={<Logout />} />

            </Route>

            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};

export default NavRoutes;
