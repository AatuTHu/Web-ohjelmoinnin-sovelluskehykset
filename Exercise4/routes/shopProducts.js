const express = require('express');
const {v4: uuidv4 } = require('uuid');
const router = express.Router()

const products = [
    { 
        "id" : uuidv4(),
        "name": "Toaster",
        "manufacturer": "AatuOy",
        "category": "routeraratus",
        "description": "Foodrouterlience",
        "price" : 3200
    },
];

router.get('/', (req, res) => {
    res.json( products );
})

router.get('/:id', (req, res) => {

    let foundIndex = products.findIndex(t => t.id === req.params.id);

    if(foundIndex == -1) {
        res.sendStatus(404);
    } else {
        res.json(products[foundIndex]);
    }

})

router.post('/', (req, res) => {
    console.log(req.body);

    products.push({
        id: uuidv4(),
        name: req.params.name,
        manufacturer: req.params.manufacturer,
        category : req.params.category,
        description: req.params.description,
        price : req.params.price
    });

    res.sendStatus(201);
})

router.put('/:id', (req, res) => {
    let found = products.find(t => t.id === req.params.id);

    if(foundIndex ) {
        found.name = req.body.name;
        found.manufacturer = req.body.manufacturer;
        found.category = req.body.category;
        found.description = req.params.description,
        found.price = req.params.price
        res.sendStatus(202);
    } else {
        res.sendStatus(404);
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