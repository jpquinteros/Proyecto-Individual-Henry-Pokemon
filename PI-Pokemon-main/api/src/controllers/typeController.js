const axios = require("axios");

module.exports = {
  getType: async () => {
    const typeApi  = await axios("https://pokeapi.co/api/v2/type");
    const typeArray = typeApi.results[0];

    // const promisesArray = await axios
    //   .all(typeArray)
    //   .catch((error) => console.log(error));
    return typeArray;

    // const typePromisesArray = await axios
    //   .all(typeArray)
    //   .catch((error) => console.log(error));
    // const mapArray = typePromisesArray.map((element) => {
    //   const typeData = element.type;
    //   const objType = {
    //     type: typeData.types.map((element) => {
    //       return { type: element.type.type };
    //     }),
    //   };
    //   return objType;
    // });
    // return mapArray;

  },
};
