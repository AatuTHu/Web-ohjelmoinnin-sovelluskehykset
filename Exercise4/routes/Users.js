const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const users = [ //don't ask it's private
    { 
        id: uuidv4(),
        forename:"Ralli",
        surname:"Raita",
        email:"Raitapaita@rantakalu.com"
    }
];

router.get('/', (req, res) => { // get users
    res.json(users);
})

router.post('/', (req, res) => { // post users
    console.log(req.body);

    users.push({ 
        id: uuidv4(),
        forename: req.body.forename,
        surname: req.body.surname,
        email: req.body.email
    });
    res.sendStatus(201);
})


module.exports = router