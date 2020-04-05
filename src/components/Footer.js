import React from 'react';
import FacebookIcon from '../assets/facebook-icon.png';
import TwitterIcon from '../assets/twitter-icon.png';
import GoogleIcon from '../assets/google-icon.png';
import LinkedinIcon from '../assets/linkedin-icon.png';
import styled from 'styled-components';

const Div = styled.div`
  padding: 2em 0;
  background: #fed201;  
  color: #000;
  div {
   display: flex;
   justify-content: center;
   margin: 20px;
   img {
    height: 25px;
    margin: 5px 10px;
   }
  }
  p {
   text-align: center;
   letter-spacing: 2px;
  }
`;

const Footer = () => {
 return (
  <Div>

   <div>
    <img alt="icono de Facebook" src={FacebookIcon}/>
    <img alt="icono de LinkedIn" src={LinkedinIcon}/>
    <img alt="icono de Twitter" src={TwitterIcon}/>
    <img alt="icono de Google+" src={GoogleIcon}/>
   </div>

   <p>© 2020 | All Rights Reserved</p>

  </Div>
 )
};

export default Footer;