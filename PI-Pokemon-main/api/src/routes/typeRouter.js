const { Router } = require('express');
const router = Router();
const { Type } = require('../db.js');
const axios = require('axios');
const { getTypes } = require('../controllers/pokemonController');

router.get('/', async (req,res)=>{
    try {
        const types = await Type.findAll()
        if(!types.length){
            const pokeApi = await axios.get('https://pokeapi.co/api/v2/type')
            gettingTypes = pokeApi.data.results.map((t)=>{
                return {name:t.name}
            })
            await Type.bulkCreate(gettingTypes);
        }
        
        res.status(200).json(await Type.findAll());
    } catch (error) {
        res.status(400).json({error:error.message})    
    }
    
    router.get('/:type', async (req, res) => {
        const { type } = req.params;
        const typeData = await getTypes();
        const pokeType = getTypes(typeData, type)
       
        
        try{
          if(pokeType.length) res.status(200).send(pokeType);
          else throw new Error ('There is no pokemon with that type')
        } catch (error) {
          res.status(404).send({error: error.message});
        }
      })
});














//{

//     const getPokeTypes = await getType();
    
//     const { type } = req.query; //traigo valor type para la query
    
//     console.log(getPokeTypes);

//     // if(!type){ //si no hay type traigo la API
//     //   return res.status(400).json({error: error.message});
//     // }
  
//     if(type){
//       const queryFilter = getPokeTypes.filter((element) => 
//         element.results.name.toLowerCase() === type.toLowerCase()
//       )
//       return res.status(200).send(queryFilter);
//     }
//    });

module.exports = router;