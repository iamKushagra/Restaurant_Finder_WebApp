const express = require('express');
const router = express.Router();
const { searchByFood,  getRestaurant} = require('../middleware/pagination');


router.get("/",searchByFood);

router.get("/get", getRestaurant)

module.exports = router;