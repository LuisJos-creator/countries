import React from 'react'

const Modal = ({id, capital, region, subregion, poblacion}) => {
    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn btn-outline btn-success" onClick={() => document.getElementById(id).showModal()}>Modal</button>
            <dialog id={id} className="modal">
                <div className="modal-box w-11/12 max-w-4xl">
                    <h3 className="font-bold text-lg">{id}</h3>
                    <p className="py-4">{capital}</p>
                    <p className="py-4">{region}</p>
                    <p className="py-4">{subregion}</p>
                    <p className="py-4">{poblacion}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default Modal