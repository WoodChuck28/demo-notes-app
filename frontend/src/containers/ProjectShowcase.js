import React from 'react'
import Gallery from 'react-photo-gallery'
import image1 from './img/3DPrint.jpg'
import image2 from './img/IMG_1303.jpg'
import image3 from './img/IMG_1304.jpg'
import image4 from './img/IMG_1520.jpg'
import image5 from './img/IMG_1521.jpg'
import image6 from './img/IMG_1523.jpg'
import image7 from './img/IMG_5670.JPG'


export default function ShowcasePage() {
    const photos = [
        {
          src: image1,
          width: 1,
          height: 1
        },
        {
          src: image2,
          width: 1,
          height: 1
        },
        {
          src: image3,
          width: 1,
          height: 1
        },
        {
          src: image4,
          width: 1,
          height: 1
        },
        {
          src: image5,
          width: 1,
          height: 1
        },
        {
          src: image6,
          width: 1,
          height: 1
        },
        {
          src: image7,
          width: 1,
          height: 1
        },

      ];
    return(
        <div>
            <Gallery photos={photos}></Gallery>
            <hr></hr>
            
        </div>
    );

}
