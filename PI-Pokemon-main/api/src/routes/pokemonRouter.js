const { Router } = require('express');
const { getData } = require('../controllers/pokemonController');
const router = Router();
const { default: axios } = require('axios')


router.get('/', async (req, res) => {

  const getApi = await getData();
  
  const { name } = req.query; //traigo valor name para la query
  
  if(!name){ //si no hay name traigo la API
    return res.send(getApi);
  }

  if(name){
    const queryFilter = getApi.filter((element) => 
      element.name === name
    )
    console.log(name)
    return res.status(200).send(queryFilter);
  }

});


module.exports = router;