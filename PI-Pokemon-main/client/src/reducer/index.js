import {
  GET_ALL_POKEMONS,
  GET_POKEMONS_BY_ID,
  GET_POKEMONS_BY_TYPE,
  FILTER_POKEMONS_BY_TYPE
} from "../actions";

const initialState = {
  pokemons: [],
  pokemonDetails: [],
  aux: [],
  types: [],
  error: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        aux: action.payload
      };
      case FILTER_POKEMONS_BY_TYPE:
        let allTPokemons = state.aux;
            let filTPokemons = allTPokemons.filter((e) => {
              return e.type[0].name === action.payload
            })
            let filterPokemons = action.payload === "All" ? allTPokemons : filTPokemons
            console.log(state.aux)
            if (!filterPokemons.length) { filterPokemons = [{msg: "no pokemons"}]}
            return {
                ...state,
                pokemons: filterPokemons
            };
      case GET_POKEMONS_BY_TYPE:
        return{
            ...state,
            types: action.payload
        }
      case GET_POKEMONS_BY_ID:
      return { ...state, pokemonDetails: action.payload };
      default:
      return { ...state };
  }
};

export default rootReducer;

// const allPokemons = state.pokemons
// const typeFilter = action.payload === 'All' ? allPokemons :
// allPokemons.filter(e => e.types === action.payload)
