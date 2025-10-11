import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <img src="https://profWilliamArte.github.io/reactpaisescompext/assets/logo4-BSAxrvBB.jpg" className="w-200 h-50 p-5" />
                </div>
                <div className='navbar-start gap-2'>
                    <Link to="/" className='btn btn-lg'>inicio</Link>
                    <Link to="/tablas" className='btn btn-lg'>tablas</Link>
                    <button className="btn btn-lg">idioma</button>
                    <details>
                        <summary className="btn btn-lg">continentes</summary>
                        <ul className="bg-base-100 rounded-t-none p-2 gap-1 shadow menu dropdown-content">
                            <li><a>todos</a></li>
                            <li><a>asia</a></li>
                            <li><a>africa</a></li>
                            <li><a>america</a></li>
                            <li><a>europa</a></li>
                            <li><a>oceania</a></li>
                        </ul>
                    </details>
                </div>
                <div className="flex gap-2">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    <button className="btn btn-outline btn-success">buscar</button>
                </div>
            </div>
        </>
    )
}

export default Navbar