import React from 'react'
import Modal from '../components/Modal'
import { Link } from 'react-router-dom'


const Card = ({ nombre, bandera, alt, capital, region, subregion, poblacion }) => {

    // Codificar los parámetros para la URL
    const encodedNombre = encodeURIComponent(nombre);
    const encodedBandera = encodeURIComponent(bandera);
    const encodedAlt = encodeURIComponent(alt);
    const encodedCapital = encodeURIComponent(capital);
    const encodedRegion = encodeURIComponent(region);
    const encodedSubregion = encodeURIComponent(subregion);
    const encodedPoblacion = encodeURIComponent(poblacion);

    return (
        <>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={bandera}
                        alt={alt}
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{nombre}</h2>
                    <div className="card-actions">
                        <Modal
                        id={nombre}
                        capital={capital}
                        region={region}
                        subregion={subregion}
                        poblacion={poblacion}
                        />
                        <Link to={`/countries/${encodedNombre}/${encodedBandera}/${encodedAlt}/${encodedCapital}/${encodedRegion}/${encodedSubregion}/${encodedPoblacion}`} className="btn btn-outline btn-error">Detalle</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card