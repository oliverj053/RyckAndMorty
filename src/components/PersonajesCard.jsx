import React from 'react'
import { Link } from 'react-router-dom'

// componente que se encarga de iterar el arrego de personajes y renderizar la vista 
export const PersonajesCard = ({ personajes = [] }) => {

  return (
    <div className='row mt-5 mb-5'>
      {
        personajes.map((personaje) => (
          <div className="col-6 col-sm-4 col-md-4 col-lg-2 col-xl-2 mb-4 animate__animated animate__fadeIn" key={personaje.id}>
            <Link to={`/personaje/${personaje.id}`}>
              <img src={personaje.image} className="card-img-top rounded-pill" alt="Foto personaje" />
              <div className="header text-center text-light p-3">
                {personaje.name}
              </div>
            </Link>
          </div>
        ))
      }
    </div>

  )
}
