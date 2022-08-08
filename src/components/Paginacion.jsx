import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getpersonajes } from '../store/slice/thunks';

// Componente que renderiza la vista de paginacion 
export const Paginacion = () => {
    //hook para obtener los datos de pagina anterior y siguiente del Store de redux
    const { info } = useSelector(state => state.rickMorty);
    //Hook para ejecutar la funcion del thunks y modificar el estado de la app  
    const dispatch = useDispatch();

    const { next, prev } = info;

    // Funcion para hacer realizar la peticion http de la siguiente pagina
    const pagSiguiente = () => {
        if (next) dispatch(getpersonajes(next));
    }

    // Funcion para hacer realizar la peticion http de la  pagina anterior
    const pagAnterior = () => {
        if (prev) dispatch(getpersonajes(prev));
    }

    return (
        <header className='d-flex justify-content-between aling-items-center mb-4'>
            <button
                type="button"
                className={(prev) ? 'btn btn-outline-primary' : 'btn btn-outline-primary disabled'}
                onClick={pagAnterior}
            >
                Anterior
            </button>
            <button
                type="button"
                className={(next) ? 'btn btn-outline-primary' : 'btn btn-outline-primary disabled'}
                onClick={pagSiguiente}
            >
                Siguiente
            </button>
        </header>


    )
}
