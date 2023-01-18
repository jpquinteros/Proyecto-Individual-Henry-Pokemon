const axios = require("axios");

module.exports = {
  getType: async () => {
    const { type } = await axios("https://pokeapi.co/api/v2/type");
    const typeArray = type.results.map(
      async (element) => await axios(element.url)
    );
    const promisesArray = await axios
      .all(typeArray)
      .catch((error) => console.log(error));
    const mapArray = promisesArray.map((element) => {
      const typeData = element.type;
      const objType = {
        type: typeData.types.map((element) => {
          return { type: element.type.type };
        }),
      };
      return objType;
    });
    return mapArray;
  },
};
