import "./FooterStyles.css"

import React from 'react'

import { FaHome, FaPhone, FaMailBulk, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                  <FaHome size={20} style={
                  {color:"#fff", marginRight: "2rem"}}/>
                    <div>
                      <p>9525 117st Delta, BC</p>
                      <p>Canada</p>
                    </div>
                </div>
                <div className="phone">
                  <h4><FaPhone size={20} style={
                  {color:"#fff", marginRight: "2rem"}}/>
                  1-604-729-2830</h4>
                </div>
                <div className="email">
                  <h4><FaMailBulk size={20} style={
                  {color:"#fff", marginRight: "2rem"}}/>
                  mehakbagga91@gmail.com</h4>
                </div>
              </div>
            <div className="right">
              <h4>Contact Me</h4>
              <p>Feel Free to get in touch.</p>
              <div className="social">
              <FaGithub size={20} style={
                  {color:"#fff", marginRight: "1rem"}}/>
              <FaLinkedin size={20} style={
                  {color:"#fff", marginRight: "1rem"}}/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer