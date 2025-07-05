import React from 'react'
import ImageSlider from './imageSlider/ImageSlider'
import CategoriesBar from './categoriesBar/CategoriesBar'
import ProductList from './productCard/ProductCards/ProductList'
// import Card from './Card'

const MainHomePage = () => {
    return (
        <div className="space-y-2">

            <section>
                <ImageSlider />
            </section>
            <section>
                <CategoriesBar />
            </section>
            <section className="bg-yellow-100 p-4 rounded shadow">
                <h2 className="text-lg font-bold">Summer Sale is Live!</h2>
                <p>Up to 50% off on selected items.</p>
            </section>
            <div className="min-h-screen bg-gray-100 p-4">
                <h1 className="text-2xl font-bold mb-6 text-center text-blue-800">Featured Products</h1>
                <ProductList />
            </div>
            {/* <div><Card /></div> */}

        </div>

    )
}

export default MainHomePage