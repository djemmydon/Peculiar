import React from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import './what-i-do.css'





const image = [
    {
        id: 1,
        images: 'img/for_web1.png',
        title: 'GRAPHIC DESIGN',
        content: 'Rhoncus est pellentesque elit ullamcorper dignissim.',
        icon: 'img/icon123.png'
    },
    {
        id: 2,
        images: 'img/for_web2.png',
        title: 'WEB DESIGN',
        content: 'Rhoncus est pellentesque elit ullamcorper dignissim.',
        icon: 'img/icon123.png'



    },
    {
        id: 3,
        images: 'img/web_3.png',
        title: 'DISK JOKEY',
        content: 'Rhoncus est pellentesque elit ullamcorper dignissim.',
        icon: 'img/icon123.png'



    },

  
]
    
function WhatIDo() {
    
 
    return (

        <div id='what_i_do'>

                                     <h2
                                className='heading'
                      data-aos="zoom-in"
                     data-aos-duration="1000"
                   data-aos-delay="300"
                                    
                  >WHAT I DO___</h2>
                

        <div className="what container" 

        
          data-aos="fade-up"
                     data-aos-duration="1000"
                   data-aos-delay="300"
        >

            
            
  {image.map((img, id)=>(
      <div className="what_content" key={id}>
          <div
            data-aos="fade-down"
                     data-aos-duration="1000"
                   data-aos-delay="400"
          className="what_content_img">
            <img src={img.images} alt="" />

          </div>
            <div className="what_content_text"

              data-aos="fade-up"
                     data-aos-duration="1000"
                   data-aos-delay="350"
            >
                        
                <h1>{img.title}</h1>
                <p>{img.content}</p>
                <img src={img.icon} alt="Image what I do" />
            </div>
      </div>
      ))}   
    </div>
        </div>
    )
}

export default WhatIDo
