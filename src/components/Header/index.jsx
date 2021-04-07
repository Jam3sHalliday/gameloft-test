import React from 'react';
import { Transformation, Image } from "cloudinary-react";

export default function Header() {
    return (
        <div className="fixed w-full flex justify-between items-center h-20 bg-blue-200 z-50">
            <div className="m-16">
                <Image cloudName="jam3shalliday" publicId="gameloft_black_logo_habl1l.png" width="230" height="230" >
                </Image> 
            </div>

            <div>
            #a8d6fd
            </div>
        </div>
    )
}

// create header transparent background, change blue and height when scroll
// parallax scrolling image for carousel, choose right font for typo anh right image with the text
