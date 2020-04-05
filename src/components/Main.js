import React from 'react';
import MainImg from '../assets/main_img.jpg';
import styled from 'styled-components';

const Section = styled.section`
  background-color: #fed201;
  margin: 20px auto;
  width: 90%;
  display: flex;
  overflow: hidden;
  color: #000;
  & > div {
    flex:1   
  };
  & .main_info {
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    h2 {
      color:#1a75bc;
      font-size: 30px;
    }
    h3 {
      color: #777;
      font-style: italic;
      font-size: 1em;
      text-transform: uppercase;
      line-height: 1.8em;
      font-weight: 600;
      letter-spacing: 1px;
    }
    p {
      color: #000;
      font-size: 1em;
      line-height: 1.8em;
      margin: 0;
    }
  }
  & .main_img img {
    width: 100%;
    heigth: auto;
  }


`;

const Main = () => {
 return (
  <Section className="main">

   <div className="main_info">
    <h2>Adopta un gatito</h2>
    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
    <p>
     Suspendisse auctor urna blandit ultricies maximus. Sed accumsan auctor
     lacus ac mattis. Mauris at nibh purus. Nullam vulputate, urna value
     facilisis eleifend, nisl turpis suscipit augue, eget tincidunt velit
     nunc ut lectus. Phasellus viverra nec augue at iaculis. Nullam
     scelerisque tincidunt sapien vitae sodales. Sed tristique ut nulla a
     ultricies. Aliquam sit amet sodales elit, et pellentesque lorem.
     Praesent quis nibh value arcu porta lobortis. Morbi rutrum ut risus sed
     hendrerit. Integer laoreet odio nec nisi varius, at scelerisque nisi
     rhoncus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Quisquam dolorum temporibus fuga voluptatum vero, dolore tempore neque
     saepe quo reiciendis?
   </p>
   </div>

   <div className="main_img">
    <img alt="imagen principal gatito" src={MainImg} />
   </div>

  </Section>
 )
};

export default Main;