import { GET_ALL_POKEMONS, GET_POKEMONS_BY_ID } from "../actions";


const initialState = { pokemons: [] , pokemonDetails: [], types:[], error: false, num: 0 }

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            console.log("sarasa");
            return {
                ...state,
                pokemons: action.payload
            }
        case GET_POKEMONS_BY_ID:
                return {...state, pokemonDetails: action.payload}
        case 'LO_QUE_SEA':
                return {...state, num: action.payload}
        default: return {...state};
    }
}

export default rootReducer;