import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from './pages/login'
import Signup from './SignUp'
import { ToastContainer } from 'react-toastify'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from './components/ImageSlider'
import SignUp from './pages/SignUp';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProtectedRoutes from './components/security/ProtectedRoutes';


const App = () => {
  return (

    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />}
        >
          <ProtectedRoutes>
            <Home />
          </ProtectedRoutes>
        </Route>


      </Routes>

      <Home />
    </div>


  )
}

export default App