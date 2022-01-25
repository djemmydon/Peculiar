import React from 'react';
import './contact.css'

const social =[
    {
        image: 'fab fa-facebook',
        link: 'https://www.facebook.com/patrick.emmydon',
        name: 'Facebook'
    },

        {
            image: 'fab fa-whatsapp',
            link: 'https://wa.me/+2349065192164',
        name: 'Whatsapp'

        },

        {
            image: 'fas fa-envelope-square',
            link: 'https://okinopatrick0@gmail.com',
        name: 'Gmail'

        }


]

function Contact() {
  return <div>
      

            <div className="container contact" id='Contact'>
                <div className="">
                    <div className="contactt">
                            {social.map((each) => (
                                <div className="cont">
                                    <a href={each.link}>
                                   <i className={each.image}></i>
                                   <span>{each.name}</span>
                                   </a>
                                </div>

                            ))}
                    </div>
              

                                    <div className="footer ">
                                     
                    <img src="./img/logo.png"  className='my___logo' alt="" />

                
                                        <p>Built by Peculiar &copy;2022</p>
                                    </div>
                </div>
            </div>
  </div>
  

}

export default Contact;
