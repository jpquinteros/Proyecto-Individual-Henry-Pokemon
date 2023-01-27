import {
    GET_ALL_POKEMONS,
    CREATE_POKEMON,
    GET_POKEMON_BY_ID,
    GET_POKEMON_BY_NAME,
    GET_TYPES,
    FILTER_CREATED,
    ORDER_ALPHABETICALLY,
    ORDER_BY_ATTACK,
    FILTER_BY_TYPE,
    ERROR,
  } from "./actions";

  const initialState = {
    pokemons: [],
    typeState:[],
    pokemonDetail: {},
    types: [],
    error: false,
  };

const rootReducer=(state=initialState, action)=>{
    switch (action.type) {
        // Acá va tu código:
        case GET_ALL_POKEMONS:
          if (!action.payload.includes(null)) {
            return {
              ...state,
              pokemons: action.payload,
              typeState:action.payload
            };
          } else {
            return {
              ...state,
              error: true,
            };
          }
        case ERROR:
          return {
            ...state,
            error: action.payload,
          };
        case GET_POKEMON_BY_ID:
          return { ...state, pokemonDetail: action.payload };
    
        case GET_POKEMON_BY_NAME:
          if (!action.payload.includes(null)) {
            return {
              ...state,
              pokemons: action.payload,
            };
          } else {
            return { ...state, error: true };
          };
          case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
      case FILTER_BY_TYPE:
            let allTypePokemons = state.typeState;
            let filterTypePokemons = allTypePokemons?.filter( a => a.Types?.map( b => b.name ).includes( action.payload ))
            let pokeFilter = action.payload === "All" ? allTypePokemons : filterTypePokemons
            console.log(filterTypePokemons)
            if (!pokeFilter.length) { pokeFilter = [{msg: "there are no Pokemons with that type"}]}
            return {
                ...state,
                pokemons: pokeFilter
            };
            case ORDER_ALPHABETICALLY:
              let allPokemons = state.pokemons;
            let sortPokes = action.payload === 'asc' ?
                allPokemons?.sort((a, b) => {
                    return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
                }) :
                allPokemons?.sort((a, b) => {
                    return b.name.toLowerCase().localeCompare(a.name.toLowerCase())
                })
            return {
                ...state,
                pokemons: sortPokes
            };   
            case ORDER_BY_ATTACK:
              const orderAttack = action.payload 
              if(orderAttack === 'AttackAsc')
                  return {
                      ...state,
                      pokemons:  state.pokemons?.sort((a, b) =>  b.attack - a.attack)
                  }
              else if(orderAttack === 'AttackDesc')
                  return {
                      ...state,
                      pokemons: state.pokemons?.sort((a, b) => a.attack - b.attack)
                  } 
              else {
                  return {
                      ...state
                  }
              };
              case CREATE_POKEMON: 
         return {
        ...state, pokemons:state.pokemons
      }
              case FILTER_CREATED:
                const array = [...state.typeState];
                let FilterPokemons=[];
                if (action.payload === "created") {
                  FilterPokemons = array?.filter((pokemon) => {
                    return pokemon.inDatabase===true;
                  });
                  if (!FilterPokemons.length) {
                    return {
                      ...state,
                      error:
                        FilterPokemons.length > 0
                          ? false
                          : ` Pokémon was not created`,
                    };
                  }
                } else {
                  FilterPokemons = array?.filter((pokemon) => {
                    return pokemon.inDatabase===false;
                  });
                }
                return {
                  ...state,
                  pokemons: FilterPokemons,
                };
          default:
            return { ...state };
          

}
}


export default rootReducer