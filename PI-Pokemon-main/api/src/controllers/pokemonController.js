const axios = require("axios");

module.exports = {
  getData: async () => {
    const { data } = await axios(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=150"
    );
    const pokeArray = data.results.map(
      async (element) => await axios(element.url)
    );
    const promisesArray = await axios
      .all(pokeArray)
      .catch((error) => console.log(error));
    const mapArray = promisesArray.map((element) => {
      const datosPoke = element.data;
      const objPokemon = {
        ID: datosPoke.id.toString(),
        Name: datosPoke.name,
        Vida: datosPoke.stats[0].base_stat,
        Ataque: datosPoke.stats[1].base_stat,
        Defensa: datosPoke.stats[2].base_stat,
        Velocidad: datosPoke.stats[5].base_stat,
        Altura: datosPoke.height,
        Peso: datosPoke.weight,
        Imagen: datosPoke.sprites.other["dream_world"].front_default,
        Imagen2: datosPoke.sprites.other["official-artwork"].front_default,
        Imagen3: datosPoke.sprites.other["home"].front_default,
        tipo: datosPoke.types.map((element) => {
          return { name: element.type.name };
        }),
      };
      return objPokemon;
    });
    return mapArray;
  },
};

//{
//   getData: async () => {
//     const getPokemons = await axios.get(
//       "https://pokeapi.co/api/v2/pokemon?offset=0&limit=150"
//     );
//     const pokemap = getPokemons.data.results.map((element) => {
//       axios.get(element.url);
//     });
//     const getUrl = await axios.all(pokemap);
//     const mapurl = getUrl.map((element) => {
//         const poke = element.data;
//         const obj = {
//             id: poke.id.toString()
//         }
//         return obj;
//     });
//     return getPokemons;
//   },
// };
