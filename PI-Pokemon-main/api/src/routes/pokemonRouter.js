const { Router } = require('express');
const { getData } = require('../controllers/pokemonController');
const router = Router();
router.get("/", async (req, res) => {
  const getApi = await getData()  
  return res.status(200).json({
    getApi: getApi
  });
});


module.exports = router;