import { GET_ALL_POKEMONS, GET_POKEMONS_BY_ID } from "./actions";


const initialState = { pokemons: [], pokemonDetails: {}, types:[], error: false }

const rootReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case GET_ALL_POKEMONS:
            if(!actions.payload.includes(null)){
                return {...state, pokemons: actions.payload}
            }else{
                return {...state, error: true}
            }
            break;
        case GET_POKEMONS_BY_ID:
            if(!actions.payload.includes(null)){
                return {...state, pokemonDetails: actions.payload}
            }
        default:
            break;
    }
}

export default rootReducer;