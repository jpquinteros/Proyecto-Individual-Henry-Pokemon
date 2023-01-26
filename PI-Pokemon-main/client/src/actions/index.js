import axios from 'axios';
export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const GET_POKEMONS_BY_NAME = 'GET_POKEMONS_BY_NAME';
export const GET_POKEMONS_BY_ID = 'GET_POKEMONS_BY_ID';
export const GET_POKEMONS_BY_TYPE = 'GET_POKEMONS_BY_TYPE';
export const CREATE_POKEMON = 'CREATE_POKEMON';
export const FILTER_POKEMONS_BY_TYPE = 'FILTER_POKEMONS_BY_TYPE';
export const ERROR = 'ERROR';

export function getAllPokemons(){
  return async function(dispatch){
    var json = await axios.get('http://localhost:3001/pokemons',{

    });
    return dispatch({
      type: GET_ALL_POKEMONS,
      payload: json.data
    })
  }

}

export function getTypes(){
  return async function(dispatch){
    try {
      const json = await axios.get('http://localhost:3001/types');
      return (dispatch)({
        type:GET_POKEMONS_BY_TYPE,
        payload:json.data
      })
    } catch (error) {
    }
  }
}

export function filterPokemonsByType(payload) {
  return {
    type: FILTER_POKEMONS_BY_TYPE,
    payload,
  };
}

// export const getPokemonsById = (id) =>{
//     return async function(dispatch){
//         try {
//             let res = await axios.get (`/pokemons/${id}`)
//             return dispatch({type: GET_POKEMONS_BY_ID, payload: res.data[0].pop()})
//         } catch (error) {
//             return dispatch({type: ERROR, payload: 'There is no Pokemon with that id'})
//         }
//     }
// };

// export const getPokemonsByName = (name) =>{
//     return async function(dispatch){
//         try {
//             let res = await axios.get (`/pokemons?name=${name}`)
//             return dispatch({type: GET_POKEMONS_BY_NAME, payload: res.data[0].pop()})
//         } catch (error) {
//             return dispatch({type: ERROR, payload: 'There is no Pokemon with that name'})
//         }
//     }
// };


// export const createPokemon = (data) =>{
//     return async function(dispatch){
//         try {
//             let res = await axios.post('/pokemons', data)
//             return dispatch({type: CREATE_POKEMON, payload: data})
//         } catch (error) {
//             return dispatch({type: ERROR, payload: 'Error creating a new Pokemon'})
//         }
//     }
// };

// export default getAllPokemons;