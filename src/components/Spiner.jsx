import React from 'react'

// Componente que renderiza la vista del loading cuando se hace una peticion HTTP
export const Spiner = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="spinner-border text-light" role="status" style={{ width: "3rem", height: "3rem" }}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
