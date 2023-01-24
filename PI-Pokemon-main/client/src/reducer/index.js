import { GET_ALL_POKEMONS, GET_POKEMONS_BY_ID, GET_POKEMONS_BY_TYPE } from "../actions";


const initialState = { pokemons: [] , pokemonDetails: [], types:[], error: false, num: 0 }

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload
            }
        case GET_POKEMONS_BY_TYPE:
            const allPokemons = state.pokemons
            const typeFilter = action.payload === 'All' ? allPokemons :
            allPokemons.filter(e => e.types === action.payload)
            return {
                ...state,
                types: typeFilter
                }

        case GET_POKEMONS_BY_ID:
                return {...state, pokemonDetails: action.payload}
        case 'LO_QUE_SEA':
                return {...state, num: action.payload}
        default: return {...state};
    }
}

export default rootReducer;