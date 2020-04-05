import React, { useState } from 'react';
import styled from 'styled-components';
import gatos from '../assets/gatos';

const Section = styled.section`
form {
  background-color:#1a75bc;
  margin: 20px auto;
  padding: 20px;
  width: 90%;
  display: flex;
  overflow: hidden;
  color: #fff;
  justify-content: space-around;
  input[type=submit] {
    position: relative;
    top: 15px;
    height: 25px;
  }
  div {
    display: flex;
    flex-direction: column;
   }
 }
`;

const FilterForm = ({ funcion, arrayDeGatos }) => {

  const [filterForm, setFilterForm] = useState({
    color: [],
    sexo: '',
    name: '',
    phone: ''
  });

  const [arrayFiltrado, setArrayFiltrado] = useState([]);

  const filtrarPorSexo = e => {
    if (e.target.name === 'sexo') {
      setArrayFiltrado(gatos.filter(gato => (
        e.target.value === "m" || e.target.value === "f" ? gato.sexo === e.target.value : gato)))
    }
  };

  const filtrarPorColor = () => {
    let inputColores = [...filterForm.color];
    setArrayFiltrado(inputColores.map(color => {
      arrayDeGatos.filter(gato => Object.values(gato).indexOf(color) !== -1 ? gato : '')
    })
    )
};

const handleChange = e => {
  setFilterForm({ ...filterForm, [e.target.name]: Array.isArray(filterForm[e.target.name]) ? [...filterForm[e.target.name], e.target.value] : e.target.value });
  filtrarPorSexo(e);
  filtrarPorColor();
};

const handleSubmit = e => {
  e.preventDefault()
  funcion(arrayFiltrado)
};

return (
  <Section>
    <form onSubmit={handleSubmit}>

      <div className="checkbox">
        <label>
          <input type="checkbox" name="color" value="negro" onChange={handleChange} />
          Negro
        </label>
        <label>
          <input type="checkbox" name="color" value="blanco" onChange={handleChange} />
          Blanco
        </label>
        <label>
          <input type="checkbox" name="color" value="gris" onChange={handleChange} />
          Gris
        </label>
        <label>
          <input type="checkbox" name="color" value="naranja" onChange={handleChange} />
          Naranja
        </label>
        <label>
          <input type="checkbox" name="color" value="rayado" onChange={handleChange} />
          Rayado
        </label>
      </div>

      <div className="radio">
        <label>
          <input type="radio" name="sexo" value='f' onChange={handleChange} />
          Femenino
        </label>

        <label>
          <input type="radio" name="sexo" value='m' onChange={handleChange} />
          Masculino
        </label>

        <label>
          <input type="radio" name="sexo" value='i' onChange={handleChange} />
          Indiferente
        </label>
      </div>

      <div className="name">Nombre
          <input type="text" value={filterForm.name} name="name" placeholder="" onChange={handleChange} />
      </div>

      <div className="phone">Telefono
          <input type="text" value={filterForm.phone} name="phone" placeholder="" onChange={handleChange} />
      </div>

      <input type="submit" value="Filtrar" />

    </form>
  </Section>
)
};

export default FilterForm;