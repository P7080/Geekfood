import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className='footer-container'>
                <div className='footer-head'>
                    <img src="/assets/img.png "alt="" />
                    <h3>logoipsum</h3>
                </div>
                <div className="footer-para">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi praesentium laboriosam voluptate minima,
                        aperiam cupiditate sunt neque quasi repudiandae earum.</p>
                </div>
                <div className="footer-important-section">
                    <a href=""><li>About</li></a>
                    <a href=""><li>Careers</li></a>
                    <a href=""><li>History</li></a>
                    <a href=""><li>Services</li></a>
                    <a href=""><li>Projects</li></a>
                    <a href=""><li>Blog</li></a>
                </div>
                <div className="footer-social-media">
                    <FaFacebook className='common-name'/>
                    <FaInstagram className='common-name' />
                    <FaTwitter  className='common-name'/>
                    <FaGithub className='common-name' />
                    <FaDribbble className='common-name' />
                </div>
            </div>
        </div>
    )
}

export default Footer
