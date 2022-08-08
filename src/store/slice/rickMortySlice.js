import { createSlice } from '@reduxjs/toolkit';

//se crea un segmento de estado en redux
export const rickMortySlice = createSlice({
    // nombre del segmento
    name: 'rickMorty',
    // Estado Inicial
    initialState: {
        personajes: [],
        personajeDetalle: [],
        info: [],
        episodios: []
    },
    //Acciones para modificar el estado
    reducers: {
        agregarPersonajes: (state, { payload }) => {
            state.personajes = payload.personajes;
            state.info = payload.info;
        },
        agregarPersonajeDetalle: (state, { payload }) => {
            state.personajeDetalle = payload.personaje;
        },
        agregarEpisodios: (state, { payload }) => {
            state.episodios = payload.episodios;
            state.personajes = payload.personajes;
        }

    }
});


// Exportacion de los metodos del reducer para cambiar el estado en el store redux
export const { agregarPersonajes, agregarPersonajeDetalle, agregarEpisodios } = rickMortySlice.actions;