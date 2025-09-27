import React from 'react'
import Modal from '../components/Modal'


const card = ({ nombre, bandera, alt, capital, region, subregion, poblacion }) => {

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
                        <button className="btn btn-outline btn-error">detalle</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default card