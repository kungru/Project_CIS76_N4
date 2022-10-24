import React from 'react'
import './Footer.css';
const Footer = () => {
  return (
    <footer>
      <div className='footer_main'>
        <div className='footer_main_left'>
          <div className='footer_logo'><img src='https://neoocular.qodeinteractive.com/wp-content/uploads/2021/08/logo-footer-img.jpg' alt='logo' /></div>
          <div className='footer_link'>
            <navLink>About Us</navLink>
            <navLink>Contact</navLink>
            <navLink>Services</navLink>
            <navLink>General</navLink>
            <navLink>Page</navLink>
          </div>
          <div className='footer_social'>
            <i class='bx bxl-facebook'></i>
            <i class='bx bxl-instagram' ></i>
            <i class='bx bxl-twitter' ></i>
            <i class='bx bxl-linkedin' ></i>
          </div>
        </div>
        <div className='footer_main_right'>
          <h4 className='footer_subcribe'>Subcribe</h4>
          <div className='footer_main_right_form'>
            <input placeholder='Enter your email here' className='footer_input'></input>
            <p className='footer_p_subcribe'>Subcribe</p>
          </div>
          <p>By subcribing you agree to with our policy</p>
        </div>
      </div>
      <div className='footer_down'>
        <div className='footer_down_left'>
          <navLink>Privacy Policy</navLink>
          <navLink>Term of Service</navLink>
          <navLink>Cookies Settings</navLink>
        </div>
        <div className='footer_reserved'>
          ©2022, All right reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer