import { configureStore } from '@reduxjs/toolkit'
import { rickMortySlice } from './slice/rickMortySlice';

//Se crea el store en donde se va almacenar la información que se va a consumir en la API
export const store = configureStore({
    reducer: {
        //Se agrega el reducer en el store
        rickMorty: rickMortySlice.reducer,
    },
});