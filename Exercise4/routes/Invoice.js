const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');




const invoice = [ //one example
    { 
      id: uuidv4(),
      "customer" : "Aatu",  
      "product" : "Toaster",
      "sum": 200 
    }
  ];

  router.get('/', (req, res) => { //get alllll
    res.json(invoice);
  })
  
  router.get('/:id', (req, res) => { //get one
    const foundIndex = invoice.findIndex(t => t.id === req.params.id);
  
    if(foundIndex === -1){
        res.sendStatus(404);
    } else {
        res.json(invoice[foundIndex]);
    }
  })

  router.post('/',(req, res) => {  //make incvoice
    console.log(req.body);

    invoice.push({
        id: uuidv4(),
        customer: req.body.customer,
        product: req.body.product,
        sum: req.body.sum
    });
    res.sendStatus(201);
})
  
  router.delete('/:invoiceId', (req, res) => { //delete invoice
    const foundIndex = invoice.findIndex(t => t.id == req.params.invoiceId);
  
    if(foundIndex === -1){
        res.sendStatus(404);
    } else{
        invoice.splice(foundIndex,1);
        res.sendStatus(202);
    }
  })

  module.exports = router