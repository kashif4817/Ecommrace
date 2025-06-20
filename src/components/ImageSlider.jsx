import React from 'react'
import Slider from "react-slick";

const images = [
    "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://unsplash.com/photos/a-person-holding-up-a-sign-that-says-i-get-the-deal-PTUKFSLjuUA",
    "https://unsplash.com/photos/a-table-with-plates-of-food-and-a-cup-of-coffee-LHqrGYzCXyo",
    "https://unsplash.com/photos/black-cordless-headphones-beside-closed-black-laptop-computer-and-smartphone-_aXa21cf7rY",
    "https://unsplash.com/photos/assorted-color-alphabet-cube-toy-lot-H7SCRwU1aiM",
];

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Auto scroll every 3 seconds
        pauseOnHover: true,
    };
    return (
        <div className="w-full absolute h-full  rounded-lg overflow-hidden shadow-lg">
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div key={index}>
                        <img src={img} alt={`Slide ${index + 1}`} className=" releative object-cover" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ImageSlider