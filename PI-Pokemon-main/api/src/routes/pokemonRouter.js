const { Router } = require('express');
const { getData, getId } = require('../controllers/pokemonController');
const router = Router();
const { default: axios } = require('axios');
const { Pokemon } = require('../db.js');


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
    console.log("estoy en post");

    const { name, hp, attack, defense, speed, height, weight } = req.body;
    const [pokemonCreate, create] = await Pokemon.findOrCreate({
      where: { name: name }, 
      defaults: {
        hp,
        attack,
        defense,
        speed,
        height,
        weight 
      }
    });

    if(create) res.status(200).send("Pokemon created")

    else res.status(400).send("Pokemon already exists")
  });




module.exports = router;