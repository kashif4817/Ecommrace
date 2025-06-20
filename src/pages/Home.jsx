import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from './Sidebar'
import ImageSlider from '../components/ImageSlider'


const Home = () => {
    return (
        <div>
            <div className=''>
                <Navbar />
            </div>

            <div >
                <ImageSlider />
            </div>
            <Sidebar />
        </div>
    )
}

export default Home