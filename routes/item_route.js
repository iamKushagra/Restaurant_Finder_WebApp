const express = require('express');
const router = express.Router();
const Item = require('../models/item_model');
const pagination = require('../middleware/pagination');


router.get("/",pagination(Item), (req, res) => {
    res.json(req.results);
})

router.get("/:id", (req, res) => {
    Item
        .findById(req.params.id)
        .then(item => res.json(item))
})


module.exports = router;