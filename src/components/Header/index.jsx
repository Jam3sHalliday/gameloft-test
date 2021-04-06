import React from 'react';
import { Transformation, Image } from "cloudinary-react";

export default function Header() {
    return (
        <>
            <div className="flex theme.headerBackground justify-between items-center h-20">
                <div className="ml-6">
                    <Image cloudName="jam3shalliday" publicId="gameloft_black_logo_habl1l.png" width="250" height="250" >
                    </Image> 
                </div>

                <div>
                #a8d6fd
                </div>
            </div>
        </>
    )
}
