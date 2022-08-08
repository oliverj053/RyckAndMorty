import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

// Componente que se encarga de renderizar la vista del buscador de personajes
export const Buscador = ({ query = '' }) => {
  // Importacion de libreria para isar la navegacion
  const navigate = useNavigate();
  // Funcion para modificar el estado del iput de busqueda
  const [palabra, setpalabra] = useState(query);

  // Funcion que se encarga de obtener el valor del input de busqueda
  const buscar = (e) => {
    setpalabra(e.target.value);
    navigate(`?q=${e.target.value}`);
  }

  // vista html del input de busqueda
  return (
    <form className="d-flex mt-3">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Buscar personaje..."
        aria-label="Search"
        name="buscar"
        value={palabra}
        onChange={buscar}
      />
    </form>
  )
}