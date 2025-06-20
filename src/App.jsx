import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from './pages/login'
import Signup from './SignUp'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from './components/ImageSlider'


const App = () => {
  return (
    // <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
    //   <ToastContainer autoClose={1000} />
    //   <Login />
    // </div>
    <div>
      <Navbar />
      <ImageSlider />
    </div>


  )
}

export default App