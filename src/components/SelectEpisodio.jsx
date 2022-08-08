import React from 'react'

// Componente que se encarga de renderizar la vista del selec de los episodios
export const SelectEpisodio = ({ name, changeID, total }) => {
  return (
    <div className="input-group mb-3">
      <select
        onChange={(e) => changeID(e.target.value)}
        className="form-select"
        id={name}
      >
        <option value="1">Seleccione un episodio...</option>
        {[...Array(total).keys(name)].map((x, index) => {
          return (
            <option value={x + 1} key={index}>
              {name} - {x + 1}
            </option>
          );
        })}
      </select>
    </div>
  )
}
