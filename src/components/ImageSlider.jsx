import React from 'react'
import Slider from "react-slick";
import i1 from '../assets/1.jpg';
import i2 from '../assets/2.jpg';
import i3 from '../assets/3.jpg';
import i4 from '../assets/4.jpg';
import i5 from '../assets/5.jpg';
import i6 from '../assets/6.jpg';


const images = [i1, i2, i3, i4, i5, i6]

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000, // Auto scroll every 3 seconds
        pauseOnHover: false,
    };
    return (

        <div className="w-full h-[300px] relative rounded-lg overflow-hidden shadow-lg my-3">
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div key={index}>
                        <img src={img} alt={`Slide ${index + 1}`} className="w-[85%] ml-auto  h-[350px] object-contain rounded-2xl " />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ImageSlider