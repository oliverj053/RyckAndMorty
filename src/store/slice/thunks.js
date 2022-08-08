import axios from "axios";
import { rickMortyApi } from "../../api/rickMortyApi";
import { agregarPersonajes, agregarPersonajeDetalle, agregarEpisodios } from "./rickMortySlice"

// Funcion que se encarga de hacer la peticion HTTP al API para obtener los datos de los personajes y guardarlos en el store de redux 
export const getpersonajes = (url='/character') => {

    return async (dispatch) => {        
        try {
            const { data } = await rickMortyApi.get(`${url}`);
            
            dispatch(agregarPersonajes({personajes: data.results, info:data.info}));
        } catch (error) {
            console.log(error);
            dispatch(agregarPersonajes({personajes: [], info:[]}));
        }
        
    }
}

// Funcion que se encarga de hacer la peticion HTTP al API para obtener los datos de un personaje por ID y guardarlos en el store de redux 
export const getpersonajeDetalle = (id) => {

    return async (dispatch) => {        
        try {
            const  {data}= await rickMortyApi.get(`/character/${id}`);
            dispatch(agregarPersonajeDetalle({personaje:data}));
            
        } catch (error) {
            console.log(error);
            dispatch(agregarPersonajeDetalle({personaje:[]}));
        }
        
    }
}

// Funcion que se encarga de hacer la peticion HTTP al API para obtener los datos de los episodios y los personajes 
// que participaron en ella y guardarlos en el store de redux 
export const getEpisodios = (id) => {

    return async (dispatch) => {        
        try {
            const {data}= await rickMortyApi.get(`/episode/${id}`);
            
            const personajesAux= await Promise.all( 
                data.characters.map((result)=>{
                    return axios.get(result);
                })
            )
            const personajes= personajesAux.map(dat=>{
                return dat.data
            })
            dispatch(agregarEpisodios({episodios: data, personajes}));
            
        } catch (error) {
            console.log(error);
            dispatch(agregarEpisodios({episodios:[]}));
        }
        
    }
}