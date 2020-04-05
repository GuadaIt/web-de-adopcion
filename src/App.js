import React, {useState} from 'react';
import './App.css';
import BarraNav from './components/BarraNav'; 
import Main from './components/Main';
import FilterForm from './components/FilterForm';
import Footer from './components/Footer';
import ContenedorCards from './components/ContenedorCards';
import gatos from './assets/gatos';

const  App = () => {

  const [copiaGatos, setCopiaGatos] = useState([...gatos]);
 
  const funcionNuevoArrayGatos = arrayFiltrado => {
    setCopiaGatos(arrayFiltrado);
  }

  return (
    <>
      <BarraNav />
      <Main />
      <FilterForm funcion={funcionNuevoArrayGatos} arrayDeGatos={copiaGatos}/>
      <ContenedorCards petList={copiaGatos}/>
      <Footer /> 
    </>
  );
}

export default App;
