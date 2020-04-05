import React from 'react';
import styled from 'styled-components';
import PetCard from './PetCard';

const Section = styled.section`
  display: flex;
  margin: 50px 0;
  flex-wrap: wrap;
  justify-content: center;
`;

const ContenedorCards = (props) => {
  
  return (
    <Section>
      {
        props.petList.map((pet, i) =>
          <PetCard
            key={i}
            shortDesc={pet.shortDesc}
            name={pet.name}
            img={pet.img}
            estaDisponible={pet.disponible} />)
      }
    </Section>
  )
}
export default ContenedorCards;