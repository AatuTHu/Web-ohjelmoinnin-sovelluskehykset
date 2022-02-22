const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');



let x = 1000

const products = [
    {
        id: uuidv4(),
        img: "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
        name:"Example product",
        description:"hard coded product for testing purposes",
        price: x
    }, 
    {
        id: uuidv4(),
        img: "https://dummyjson.com/image/i/products/3/thumbnail.jpg",
        name:"Example product",
        description:"hard coded product for testing purposes",
        price: x
    },
    {
        id: uuidv4(),
        img: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
        name:"Example product",
        description:"hard coded product for testing purposes",
        price: x
    }
];




router.get('/', (req, res) => {    //SHOW ALL PRODUCTS
    res.json(products);
})

router.get('/:productId', (req, res) => { //SHOW PRODUCT BY ID

    let foundIndex = -1;
    for (let i = 0; i < products.length; i++) {
        if(products[i].id == req.params.productId){
            foundIndex = i;
            break;
        }
    }
    if(foundIndex === -1){
        res.sendStatus(404);
    }else{
        res.json(products[foundIndex]);
    }
    res.sendStatus(200);
})

router.delete('/:productId', (req, res) => {  // DELETE PRODUCT

    let foundIndex = products.findIndex(t => t.id == req.params.productId);

    if(foundIndex === -1){
        res.sendStatus(404);
    }else{
        products.splice(foundIndex, 1);
        res.sendStatus(202);
    }

})

router.post('/',(req, res) => {    // CREATE PRODUCT
    console.log(req.body);

    products.push({
        id: uuidv4(),
        img: req.body.img,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    });
    res.sendStatus(201);
})

module.exports = router