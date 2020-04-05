import React from 'react';
import styled from 'styled-components';
import MainButton from './MainButton';

const Div = styled.div`
 background-color: ${props => props.isAvailable ? '#1a75bc' : '#ccc'};
 margin: 20px;
 width: 500px;
 height: 200px;
 display: flex;
 overflow: hidden;
 color: #fff;
 transition: background-color 0.5s;
 &:hover {
     background-color: #fed201;
     color: #000;
     button {
       color: #1a75bc;
       border: 1px solid #1a75bc;
      }
      img {
        transform: scale(2);
      }
      h3 {
       color: #1a75bc;
      }
    }
`

const CardImg = styled.div` 
  flex: 1;
    overflow: hidden;
    img {
      width: auto;
      height: 100%;
      transition: all 1s;
    }
`

const CardInfo = styled.div` 
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 20px;
`

const PetCard = ({name, img, shortDesc, estaDisponible}) => {
  
  return (
    <Div isAvailable={estaDisponible}>
      <CardImg>
        <img alt="cat" src={img} />
      </CardImg>
      <CardInfo>
        <h3>{name}</h3>
        <p>{shortDesc}</p>
        <MainButton isAvailable = {estaDisponible ? "Ver más" : "No disponible"}></MainButton>
      </CardInfo>
    </Div>
  )
};

export default PetCard;