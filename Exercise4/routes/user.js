const express = require('express');
const {v4: uuidv4 } = require('uuid');
const router = express.Router()

const users = [
    { 
        "id" : uuidv4(),
        "firstName": "Aatu",
        "lastName": "Huttula",
        "address": "Riihimäen vankila"
    },
];

router.get('/', (req, res) => {
    res.json( users );
})

router.post('/', (req, res) => {
    console.log(req.body);

    users.push({
        id: uuidv4(),
        firstName: req.params.firstName,
        lastName: req.params.lastName,
        adrress : req.params.address
    });

    res.sendStatus(201);
})


module.exports = router;