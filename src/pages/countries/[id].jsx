import React from 'react';
import { useParams } from 'react-router-dom';
import Hero from '../../components/Hero';

const CountryDetail = () => {
  const params = useParams();
  const id = decodeURIComponent(params.id);
  const bandera = decodeURIComponent(params.bandera);
  const alt = decodeURIComponent(params.alt);
  const capital = decodeURIComponent(params.capital);
  const region = decodeURIComponent(params.region);
  const subregion = decodeURIComponent(params.subregion);
  const poblacion = decodeURIComponent(params.poblacion);

  return (
    <>
    <Hero 

    id={id}
    bandera={bandera}
    alt={alt}
    capital={capital}
    region={region}
    subregion={subregion}
    poblacion={poblacion}
    
    />



      




      {/*<h2>El id del país es: {id}</h2>
      <h2>la bandera del país es:</h2> <img src={bandera} alt={alt} />
      <h2>El capital del país es: {capital}</h2>
      <h2>El region del país es: {region}</h2>
      <h2>El subregion del país es: {subregion}</h2>
      <h2>El poblacion del país es: {poblacion}</h2>*/}
    </>
  );
};

export default CountryDetail