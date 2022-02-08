const express = require('express');
const {v4: uuidv4 } = require('uuid');
const router = express.Router()

const purchase = [
    { 
        "id" : uuidv4(),
        "name": "Aatu",
        "Bought_items": "Toaster,glue",
        "total_sum": 3502,
    },
    {
        "id" : uuidv4(),
        "name": "Raimo",
        "Bought_items": "Dinosaur_Bone,tape",
        "total_sum": 12000,
    }
];

router.get('/', (req, res) => {
    res.json( purchase );
})

router.get('/:id', (req, res) => {

    let foundIndex = purchase.findIndex(t => t.id === req.params.id);

    if(foundIndex == -1) {
        res.sendStatus(404);
    } else {
        res.json(purchase[foundIndex]);
    }

})


router.delete('/:id', (req, res) => {

    let foundIndex = products.findIndex(t => t.id === req.params.id);

    if(foundIndex == -1) {
        res.sendStatus(404);
    } else {
      products.splice(foundIndex,1);
      res.sendStatus(202);  
    }
})

module.exports = router;