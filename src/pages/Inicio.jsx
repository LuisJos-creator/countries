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

            <div className="grid grid-cols-5 grid-rows-5 gap-4">
                {paises.map(country => (

                    <Card
                        nombre={country.name.common}
                        bandera={country.flags.png}
                        alt={country.flags.alt}
                    />
                ))}
            </div>


        </>
    )
}

export default inicio