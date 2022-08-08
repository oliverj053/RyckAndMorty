import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getpersonajeDetalle } from '../store/slice/thunks';

export const PersonajePage = () => {
    // Importacion del hook para navegar por rutas
    const navigate = useNavigate();
    // Hooks para obtene los parametros de la URL 
    const { params } = useParams();
    //Hook para ejecutart las funciones del thunks paRa modificar el estado de la aplicacion en el store de redux
    const dispatch = useDispatch();
    //Hook para obtener los datos almacenados en el  store de redux
    const { personajeDetalle: personaje } = useSelector(state => state.rickMorty);


    // Hook que se ejecuta antes de que se cree el componente para obtener los datos de los de un personaje del api 
    useEffect(() => {
        dispatch(getpersonajeDetalle(params));
    }, [])

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-12 col-md-4  text-center mb-3">
                    <img
                        className='img-fluid animate__animated animate__fadeInLeft'
                        src={personaje.image}
                        alt="Foto"
                    />
                </div>
                <div className="col-12 col-md-8">
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'> <b>name:</b> {personaje.name}</li>
                        <li className='list-group-item'> <b>Status:</b> {personaje.status}</li>
                        <li className='list-group-item'> <b>Species:</b> {personaje.species}</li>
                        {
                            (personaje.type !== '') && <li className='list-group-item'> <b>Type:</b> {personaje.type}</li>
                        }
                        <li className='list-group-item'> <b>Gender:</b> {personaje.gender}</li>
                        <li className='list-group-item'> <b>Origin:</b> {personaje.origin?.name}</li>
                        <li className='list-group-item'> <b>Location:</b> {personaje.location?.name}</li>
                        <li className='list-group-item'> <b>Recent Episodes</b> </li>
                        {/* <Episodios episodios={episodiosRecientes} /> */}
                    </ul>

                    <button
                        className='btn btn-outline-primary mt-4'
                        onClick={() => navigate(-1)}
                    > Regresar</button>
                </div>
            </div>
            <div className="row mt-3">

            </div>
        </div>

    )
}
