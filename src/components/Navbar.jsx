import React from 'react'

const inicio = () => {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className='navbar-start gap-2'>
                    <button className="btn btn-lg">Inicio</button>
                    <button className="btn btn-lg">tabla</button>
                    <button className="btn btn-lg">idioma</button>
                    <details>
                        <summary className="btn btn-lg">continentes</summary>
                        <ul className="bg-base-100 rounded-t-none p-2 gap-1 shadow menu dropdown-content">
                            <li><a>todos</a></li>
                            <li><a>asia</a></li>
                            <li><a>africa 2</a></li>
                            <li><a>america</a></li>
                            <li><a>europa</a></li>
                            <li><a>oceania</a></li>
                        </ul>
                    </details>
                </div>
                <div className="flex gap-2">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    <button className="btn btn-outline btn-success">Success</button>
                </div>
            </div>
        </>
    )
}

export default inicio