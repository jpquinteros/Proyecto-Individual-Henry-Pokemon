const { Router } = require('express');
const { getData, getId } = require('../controllers/pokemonController');
const router = Router();
const { default: axios } = require('axios');
const { Pokemon, Type } = require('../db.js');


router.get('/', async (req, res) => {

  const { name } = req.query;
  const getApi = await getData();



  if (!name) {
      return res.status(200).send(getApi)
  }
  if (name) {
      const pokemonsInDb = await Pokemon.findAll({where:{name:name}})
      const filterDatabase = getApi.filter((element) =>
      element.name.toLowerCase() === name.toLowerCase());
      if(pokemonsInDb.length<=0){
          return res.send(filterDatabase)}
          else{
      return res.send(pokemonsInDb)}

  }
});

  router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const idData = await getData();
    const pokeId = getId(idData, id)
   
    
    try{
      if(id.length>10){
        const pokemonsIdinDb = await Pokemon.findAll({where: {id:id}})
        return res.send(pokemonsIdinDb);
      }
      if(pokeId.length) res.status(200).send(pokeId);
      else throw new Error ('There is no pokemon with that id')
    } catch (error) {
      res.status(404).send({error: error.message});
    }
  })

  router.post('/', async (req, res) => {
    const { hp, attack, defense, speed, height, weight, image, type1, type2 } = req.body;
    const { name } = req.body;
    if (!name || name.trim() === "") {
        return res.status(400).send("Name is required.");
    };

    let types = ["unknown"];
    if (!type1 && !type2) {
      types = ["unknown"];
    } else if (type1 && !type2) {
      types = [type1];
    } else if (type2 && !type1) {
      types = [type2];
    } else {
      types = [type1, type2];
    }

    const getApi = await getData();
    const filterName = getApi.filter((r) => r.name.toLowerCase() === name.toLowerCase());
    if (filterName.length) return res.status(400).json({ msg: 'Pokemon already exists' });
    const [newPokemon, creado] = await Pokemon.findOrCreate({
        where: { name: name },
        defaults: { hp, attack, defense, speed, height, weight, image}

    });
    let assignTypes = await Promise.all(
        types.map((type) => Type.findOne({ where: { name: type } }))
      );
      newPokemon.setTypes(assignTypes)
    if (creado) return res.json({ msg: "Pokemon created" })
    else return res.status(400).json({ msg: "Pokemon already exists" })

})


module.exports = router;