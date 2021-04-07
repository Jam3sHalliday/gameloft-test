import React from "react";
import { Image, Transformation } from 'cloudinary-react';
import Slider from 'react-slick';

const Carousel = () => {
    const sliderSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000
    };

    return (
        <Slider { ...sliderSettings }>
            <div className="h-screen">
                <Image cloudName="jam3shalliday" publicId="The_Oregon_Trail_Screen_02_EN_63734a52d9_gywypn.jpg">
                </Image>
            </div>
        </Slider>
    )
}

export default Carousel;