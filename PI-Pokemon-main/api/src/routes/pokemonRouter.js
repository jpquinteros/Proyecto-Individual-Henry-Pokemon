const { Router } = require('express');
const { getData, getId } = require('../controllers/pokemonController');
const router = Router();
const { default: axios } = require('axios');
const {Pokemon, Type} = require('../db.js');


router.get('/', async (req, res) => {

  const getApi = await getData();
  
  const { name } = req.query; //traigo valor name para la query
  
  if(!name){ //si no hay name traigo la API
    return res.send(getApi);
  }

  if(name){
    const queryFilter = getApi.filter((element) => 
      element.name.toLowerCase() === name.toLowerCase()
    )
    //console.log(name)
    return res.status(200).send(queryFilter);
  }
 });
  router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const idData = await getData();
    const pokeId = getId(idData, id)
    
    try{
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