import Card from '../components/card'
import Hero from '../components/hero'
import React, { useEffect, useState } from 'react';

const inicio = () => {
    const [paises, setPaises] = useState([])
    const API = 'https://restcountries.com/v3.1/all?fields=name,flags,capital,region,subregion,population'

    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => {
                setPaises(data);
            })
    }, []);



    return (
        <>
            {paises.map(country => (
                
                <Card
                    nombre={country.name.common}
                    bandera={country.flags.png}
                    alt={country.flags.alt}
                />
            ))}
        </>
    )
}

export default inicio