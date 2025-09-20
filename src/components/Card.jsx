import React from 'react'

const card = ( nombre, bandera, alt) => {

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
                        <button className="btn btn-outline btn-success">modal</button>
                        <button className="btn btn-outline btn-error">detalle</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default card