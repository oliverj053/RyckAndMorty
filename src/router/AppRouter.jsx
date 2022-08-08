import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Nabvar } from '../components'
import { EpisodiosPage } from '../pages/EpisodiosPage'
import { PersonajePage } from '../pages/PersonajePage'
import RickMortyApp from '../RickMortyApp'

export const AppRouter = () => {
  return (
    <>
      {/* Importacion del componente Navbar  */}
      <Nabvar />
      {/* Definicion de las rutas de la aplicacion  */}
      <Routes>
        <Route path="/*" element={<RickMortyApp />} />
        <Route path="/personaje/:params" element={<PersonajePage />} />
        <Route path="/episodios" element={<EpisodiosPage />} />
      </Routes>
    </>
  )
}
