const axios = require('axios');
const {Pokemon, Type} = require('../db')

module.exports = {
  getData: async () => {
    const { data } = await axios(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
    );
    const pokeArray = data.results.map(
      async (element) => await axios(element.url)
    );
    const promisesArray = await axios.all(pokeArray)
    const dataBase = await Pokemon.findAll({include: Type})
    const mapDb = dataBase.map((d) =>{
        return{
          id: d.id,
          name: d.name,
          hp: d.hp,
          attack: d.attack,
          defense: d.defense,
          speed: d.speed,
          height: d.height,
          weight: d.weight,
          image: d.image,
          inDatabase: true,
          type: d.Types && d.type.map((t) =>{
            return {
              name: t.name
            }
          })
        }
    })

    const mapArray = promisesArray.map((element) => {
      const datosPoke = element.data;
      const objPokemon = {
        id: datosPoke.id.toString(),
        name: datosPoke.name,
        hp: datosPoke.stats[0].base_stat,
        attack: datosPoke.stats[1].base_stat,
        defense: datosPoke.stats[2].base_stat,
        speed: datosPoke.stats[5].base_stat,
        height: datosPoke.height,
        weight: datosPoke.weight,
        image: datosPoke.sprites.other["dream_world"].front_default,
        image2: datosPoke.sprites.other["official-artwork"].front_default,
        image3: datosPoke.sprites.other["home"].front_default,
        type: datosPoke.types.map((element) => {
          return { name: element.type.name};
        }),
      };
      return objPokemon;
    });
    return mapArray.concat(dataBase);
  },
  getId: (alls, id) => {
    const res = alls.filter(element => element.id == id);
    return res;
  },
};


