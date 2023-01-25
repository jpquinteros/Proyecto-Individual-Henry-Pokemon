const axios = require("axios");

module.exports = {
  getType: async () => {
    const typeApi  = await axios("https://pokeapi.co/api/v2/type");
    const typeArray = typeApi.results[0];
    return typeArray;
  },
};
