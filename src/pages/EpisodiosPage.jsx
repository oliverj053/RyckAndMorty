import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { PersonajesCard } from '../components';
import { SelectEpisodio } from '../components/SelectEpisodio';
import { getEpisodios } from '../store/slice/thunks';

export const EpisodiosPage = () => {
  //Hook para obtener los datos almacenados en el  store de redux
  const { episodios, personajes } = useSelector(state => state.rickMorty);
  //Hook para ejecutart las funciones del thunks paRa modificar el estado de la aplicacion en el store de redux
  const dispatch = useDispatch();
  //Hook que se encarga de cambiar el estado del componente select
  const [id, setId] = useState(1);

  // Hook que se ejecuta antes de que se cree el componente para obtener los datos de los episodios del api 
  useEffect(() => {
    dispatch(getEpisodios(id));
  }, [id])

  return (
    <div className="container">
      <SelectEpisodio name="Episodio" changeID={setId} total={51} />
      <div className="row mt-4">
        <div className="col-12 col-md-4 text-center"><h5 className='text-light'>Name: {episodios?.name}</h5></div>
        <div className="col-12 col-md-4 text-center"><h5 className='text-light'>Episode: {episodios?.episode}</h5></div>
        <div className="col-12 col-md-4 text-center"><h5 className='text-light'>Air_date: {episodios?.air_date}</h5></div>
      </div>
      <PersonajesCard personajes={personajes} />
    </div>
  )
}
