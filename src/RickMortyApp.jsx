import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string'
import { Buscador, PersonajesCard } from './components';
import { Paginacion } from './components/Paginacion';
import { getpersonajes } from './store/slice/thunks';


const RickMortyApp = () => {
    //Hook para obtener los datos almacenados en el  store de redux
    const { personajes } = useSelector(state => state.rickMorty);
    //Hook para ejecutart las funciones del thunks para modificar el estado de la aplicacion en el store de redux
    const dispatch = useDispatch();
    //Hook para obtener la ruta actual
    const location = useLocation();
    //Se obtiene el parametro que contiene la url actual
    const { q = '' } = queryString.parse(location.search);

    // Hook que se ejecuta antes de que se cree el componente,se encarga de obtener los datos del personaje
    // si en la URL hay parametros hace la consulta a la api para buscar los personajes que coinciden con el parametro
    // si esta vacío hace la consulta para obtener todos los perdonajes
    useEffect(() => {
        if (q.length > 2) {
            dispatch(getpersonajes(`/character/?name=${q}`));
            return;
        }
        if (q === '') {
            dispatch(getpersonajes());
            return;
        }
    }, [q])


    return (
        <>


            <div className="container">
                <Buscador query={q} />
                {

                    (personajes.length > 0)
                        ? (<>

                            <PersonajesCard personajes={personajes} />
                            <Paginacion />
                        </>
                        )
                        : <h4 className='text-danger text-center mt-5'>No se encontraron coincidencias con la búsqueda: {q}</h4>
                }

            </div>
            {/* {
                (cargando) && (<Spiner/>)
            } */}

        </>
    )
}

export default RickMortyApp;
