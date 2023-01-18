const axios = require('axios');

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
        id: datosPoke.id.toString(),
        name: datosPoke.name,
        health: datosPoke.stats[0].base_stat,
        attack: datosPoke.stats[1].base_stat,
        defense: datosPoke.stats[2].base_stat,
        speed: datosPoke.stats[5].base_stat,
        height: datosPoke.height,
        weight: datosPoke.weight,
        image: datosPoke.sprites.other["dream_world"].front_default,
        image2: datosPoke.sprites.other["official-artwork"].front_default,
        image3: datosPoke.sprites.other["home"].front_default,
        type: datosPoke.types.map((element) => {
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
