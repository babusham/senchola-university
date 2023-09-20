import React from 'react'
import './Footer.css';
import {BsFillSendFill} from 'react-icons/bs'
import {FaLinkedin,FaFacebookSquare,FaTwitter} from 'react-icons/fa'
import {FaYoutube,FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="flex-box">
          <div className="senchola  text-start">
           <h5>Senchola</h5>
           <p>we help ambitious companies scale <br /> through our exclusive global  network of <br />freelance talent, outsourcing services <br /> and market insights. Join Senchola to <br />accelarate scale your business <br />growth.</p>
          </div>
          <div className=" text-start usecase">
            <h6>Use cases</h6>
            <p>UI design</p>
            <p>UX design</p>
            <p>ux design</p>
            <p>UX design</p>
            <p>UX design</p>
            <p>Prototyping</p>

          </div>
          <div className=" text-start usecase">
            <h6>Expore</h6>
            <p>Figma</p>
            <p>Customers</p>
            <p>Why I love Figma</p>
            <p>Figma</p>
            <p>Customers</p>
            <p>Why I Love Figma</p>
          </div>

          <div className=" text-start usecase">
            <h6>Resources</h6>
            <p>Resources Hub</p>
            <p>Support</p>
            <p>Education</p>
            <p>Resources Hub</p>
            <p>Support</p>
            <p>Education</p>

          </div>

          <div className="connect">
            <p>Connect with senchola technologies</p>
            <div className="mail">
                <input type="email" placeholder='Email' />
                <button><BsFillSendFill/></button>
            </div>

            <div className="socialLinks">
              <span><FaLinkedin/></span>
              <span><FaYoutube/></span>
              <span><FaFacebookSquare/></span>
              <span><FaInstagram/></span>
              <span><FaTwitter/></span>
           </div>
          </div>
        

        </div>
        
        <p className='text-center mt-2 mb-0 text-capitalize copyrights'>all copyrights reserved &copy; 2023 senchola technologies solution</p>
    </div>
  )
}

export default Footer;