import React from 'react';
import HamburguerIcon from '../assets/hamburguer-icon.png';
import styled from 'styled-components';

const Nav = styled.nav`
 background-color: #1a75bc;
 height: 80px;
 padding: 20px;
 color: #fff;
 display: flex;
 align-items: center;
 justify-content: space-between;
 img {
  height: 30px;
 }
`;

const BarraNav = () => {
 return (
  <Nav>
   <div>#AdoptAdas</div>
   <img alt="icono hamburguersa menu" src={HamburguerIcon}/>
  </Nav>
 )

};

export default BarraNav;