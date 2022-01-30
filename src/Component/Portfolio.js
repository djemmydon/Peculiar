import React from 'react'
import  './portfolio.css'

import Carousel from 'react-elastic-carousel'

import 'aos/dist/aos.css'; // You can also use <link> for styles
import './what-i-do.css'


const portfolio = [
    {
        id:1,
        img: './img/PROJECT2.jpg',
        link: 'https://peculiardj.netlify.app',
        title: 'First Portfolio',
        about:'Veniam, dolorum. Soluta maxime distinctio nobis facere, voluptatem quam rem quia consectetur!',
    },
    {
        id:2,
        img: './img/PROJECT3.jpg',
        link: 'https://affectionate-mcclintock-7d9b3c.netlify.app/',
        title: 'Netflix',
        about:'Veniam, dolorum. Soluta maxime distinctio nobis facere, voluptatem quam rem quia consectetur!',

    },
    {
        id:3,
        img: './img/PROJECT4.jpg',
        link: 'https://confident-visvesvaraya-2f980d.netlify.app/index.html',
        title: 'FIRST PORTFOLIO',
        about:'Veniam, dolorum. Soluta maxime distinctio nobis facere, voluptatem quam rem quia consectetur!',

    },
    {
        id:4,
        img: './img/PROJECT1.jpg',
        link: 'https://confident-visvesvaraya-2f980d.netlify.app/index.html',
        title: 'Academia',
        about:'Veniam, dolorum. Soluta maxime distinctio nobis facere, voluptatem quam rem quia consectetur!',

    },
]

const breakPoints = [
{ width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1100, itemsToShow: 2 },
        { width: 1150, itemsToShow: 3, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
]

function Portfolio() {

    
    return (
        <div className="pooo " id='portfolio'>
                             <h2
                                className='heading'
                      data-aos="zoom-in"
                     data-aos-duration="1000"
                   data-aos-delay="300"
                                    
                  >PORTFOLIO ___</h2>
                

        
        <Carousel
        
        disableArrowsOnEnd={false}
        pagination={false}
        enableSwipe={true}
        itemPadding={[0, 10]}
        transitionMs={500}
        breakPoints={breakPoints}
        className='portfolio '>

                  {portfolio.map((port, id)=>(
      <div
      

          data-aos="zoom-in"
                     data-aos-duration="1000"
                   data-aos-delay="100"
      className="card" key={id}>
          <div className="what_content_img_txt">
            <img src={port.img} alt="" className='card-img-top card_img' />

                        <div className="card-body body_body">
                <h1>{port.title}</h1>
                    <p>{port.about}</p>
                    <div className="buttton">
                    <a href={port.link}><button>Explore</button></a>

                    </div>
                        </div>

          </div>
         
      </div>
      ))}   
  
        </Carousel >
        </div>
    )
}

export default Portfolio
