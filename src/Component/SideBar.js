import React, {useState, useEffect} from 'react'

import '../Component/sidebar.css'
import WhatIDo from './WhatIDo';
import Image from './my_image2.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Portfolio from './Portfolio';
import Contact from './Contact';
import { Link } from "react-scroll";
// ..
AOS.init();

const nav = [
    {
        id:1,
        title: 'Home',
        link: 'wrapper'
    },
    {
        id: 2,

        title: 'About ',
        link: 'about'
    },
    {
        id: 3,

        title: 'Services',
        link: 'what_i_do'
    },
    {
        id: 4,

        title: 'Portfilio',
        link: 'portfolio'
    },

    {
        id: 5,

        title: 'Contact',
        link: 'Contact'
    },
];


    const SideBar = () => {

        const [menu, setMenu] = useState(true);
                const [show, handleShow ] = useState(false)


        const handleClick =()=> setMenu(!menu)
        const closeMenu =() => setMenu(true)

    useEffect(() => {
            window.addEventListener('scroll',()=>{
                if(window.scrollY > 100){
                     handleShow(true)
                } else handleShow(false)

               
            })
   return ()=>{
                    window.removeEventListener("scroll");
                }
    }, [])


    
    return (
        <div className='wrapper ' id='wrapper'>
            
            <div className={`head ${show && 'header_black'}`}>
                <div className="logo">

                    <img src="./img/logo.png"  className='my___logo' alt="" />

                </div>
                <div  className='menu_icon' onClick= {handleClick}>
                    <i className={menu ? 'fas fa-bars' : 'fas fa-times'}></i>

                 </div>
            </div>
                 
            <div className={menu ? 'sidebar active' : 'sidebar'}
           
            
            >
                <div className='nav_item'>

                    <div  className='menu' onClick= {handleClick}>
                    <i className={menu ? 'fas fa-bars' : 'fas fa-times'}></i>

                 </div>
                        <ul
                        
                       
                   >

                  
                            {nav.map((item, id) => (
                                <li key={id} 
                                
                                >
                                   <Link  onClick={closeMenu} activeClass="active" to={item.link} smooth={true}>{item.title}</Link>
                                     
                                 
                                   
                                   
                                </li>
                            ))}

                                    
                        </ul>

                
                </div>

              
            </div>


            <div className="main flex "  onClick={closeMenu}>
                
                <div className="main_cont row container justify-content-center align-item-center">
                    <div className="img col-md-6"
                             data-aos="zoom-out"
                                     data-aos-duration="1000"
                                    data-aos-delay="500"
                                    
                    >

                        <img src="img/my_image.png" alt="" />

                    </div>
                        <div className="text col-md-6 ">
                                <div className="name_decription">
                                    <h2
                                     data-aos="zoom-out"
                                     data-aos-duration="1000"
                                    data-aos-delay="500"
                                    
                                    >PECULIAR EMMYDON</h2>
                                    <h3
                                     data-aos="fade-up"
                                     data-aos-duration="1000"
                                    data-aos-delay="800
                                    "
                                     
                                    >I’m a professional UI/UX designer with front end development skills based in Lagos.</h3>

                                    <div className="button"
                                     data-aos="fade-left"
                                     data-aos-duration="1000"
                                       data-aos-once="false"
                                    data-aos-delay="900"
                                    >
                                        <a href="https://github.com/djemmydon"><button className='my-btn'>Hire Me</button> </a>
                                    </div>

                                </div>
                                
    
                        </div>
                  
                </div>
     
            </div>
                
                <div className="columnn" id='about'>
                               <h2
                                className='heading'
                      data-aos="zoom-in"
                     data-aos-duration="1000"
                   data-aos-delay="300"
                                    
                  >WHO AM I ___</h2>
                


            <div className="about flex justify-content-center container ">
     
                <div className="row container">
                    <div className="col-md-6 text_me"
                    
                     data-aos="zoom-in"
                     data-aos-duration="1000"
                   data-aos-delay="350">
                        <h4>ABOUT ME</h4>

                    
                        <p>    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure beatae iste possimus officia expedita provident? Quasi, nemo pariatur nesciunt molestias neque atque labore, ab delectus, explicabo vel totam velit hic!</p>


                        <h4>Hi, I am Peculiar</h4>

                      
                        <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure beatae iste possimus officia expedita provident? Quasi, nemo pariatur nesciunt molestias neque atque labore, ab delectus, explicabo vel totam velit hic!</p>
                        <button className='about_btn'>More About Me</button>

                    </div>
                    <div className="col-md-6 images_side"
                     data-aos="fade-up"
                     data-aos-duration="1000"
                   data-aos-delay="400"
                    >

                        <img src={Image} alt="" />   
                    </div>

                </div>
            </div>
                </div>
        
                                
                                <WhatIDo />
                                 <Portfolio />
                                 <Contact />
                                
        </div>
    )
}

export default SideBar
