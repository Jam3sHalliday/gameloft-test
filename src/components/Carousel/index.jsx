import React from "react";
import { Image, Transformation } from 'cloudinary-react';
import Slider from 'react-slick';
import { Typography, Box } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Fade from 'react-reveal/Fade';
import { MailOutlined, Share, HeadsetMicOutlined } from '@material-ui/icons';
import styles from './styles.css';

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
            <div className="h-screen relative">
                <div className="">
                    <Image cloudName="jam3shalliday" publicId="the_oregon_trail_bg_xjzyev.png" />
                </div>

                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Fade bottom>
                        <img src="https://res.cloudinary.com/jam3shalliday/image/upload/v1617876810/the_oregon_trail_banner_nqqr3h.png" alt=""/>
                    </Fade>
                </div>

                <div className="absolute bottom-20 left-1/4 text-white text-justify w-9/12" >
                    <h2 className="text-4xl font-semibold">The Oregon Trail</h2>
                    <div className="flex">
                        <p className="text-sm">
                            Action / Adventure  | 
                        </p>
                        <p><Rating name="read-only" value={4} readOnly /></p>
                    </div>
                    <div className="text-xl flex justify-between">
                        <p className="w-3/12">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempore assumenda dolorem tenetur, a distinctio at omnis, aliquam facere quidem illo dolore reiciendis accusamus doloremque nulla, eaque et harum delectus.
                        </p>

                        <div className="flex flex-col justtify-between mr-16">
                            <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center">
                                <div className="w-10 h-10 flex rounded-full justify-center items-center transition duration-500 ease-in-out bg-white hover:bg-red-600">
                                    <Share style={{ color: "#2563EB", fontSize: '16px' }} />
                                </div>
                            </div>
                            <div className="w-10 h-10 rounded-full flex justify-center items-center transition duration-500 ease-in-out bg-white hover:bg-red-600">
                                <MailOutlined color="primary"/>
                            </div>
                            <div className="w-10 h-10 rounded-full flex justify-center items-center transition duration-500 ease-in-out bg-white hover:bg-red-600">
                                <HeadsetMicOutlined color="primary" />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    </div>
            </div>
{/* 
            <div className="h-screen">
                <div className="">
                    <Image cloudName="jam3shalliday" publicId="The_Oregon_Trail_Screen_02_EN_63734a52d9_gywypn.jpg" />
                </div>
            </div>

            <div className="h-screen">
                <div className="">
                    <Image cloudName="jam3shalliday" publicId="The_Oregon_Trail_Screen_02_EN_63734a52d9_gywypn.jpg" />
                </div>
            </div> */}
        </Slider>
    )
}

export default Carousel;