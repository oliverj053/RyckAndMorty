import axios from "axios";

//Se crea la instancia para realizar las peticiones HTTP usando axios
export const rickMortyApi = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
});