import React from 'react'
import "./Footer.css"
import img1 from "./../../assets/logo.png"
function Footer() {
  return (
    <div className='footer'>
        <div className="section_1">
            <img src={img1} alt="" className='img_footer' />
            <p className='title_footer'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, aperiam officia hic totam quia adipisci a voluptatibus, dignissimos delectus nobis dolor, illo voluptatem quos eius iste enim nesciunt porro quo.

            </p>
        </div>
        <div className="services">
           <h3 className='head_footer'>company</h3>
           <ul className='list_footer'>
            <li><a href="">Home</a></li>
            <li><a href="">About us</a> </li>
            <li><a href="">Delivery</a></li>
            <li><a href="">Privacy</a>
            </li>
           </ul>
        </div>
        <div className="contact_footer">
        <h3 className='head_footer'>Get in touch</h3>
           <ul className='list_footer'>
            <li><a href="">+1-000-000-0000</a></li>
            <li><a href="">greatstackdev@gmail.com</a></li>
            <li><a href="">Instagram</a></li>
            
           </ul>
        </div>

    </div>
  
  )
}

export default Footer