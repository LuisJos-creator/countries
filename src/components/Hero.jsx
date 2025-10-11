import React from 'react'

const Hero = ({ id, bandera, alt, capital, region, subregion, poblacion }) => {
    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={bandera}
                        alt={alt}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">{id}</h1>
                        <p className="py-6">
                            Capital: {capital} <br />
                            Región: {region} <br />
                            Subregión: {subregion} <br />
                            Población: {poblacion}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero