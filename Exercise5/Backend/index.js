const bodyParser = require('body-parser');
const cors = require('cors');

const express = require('express')
const app = express()
const port = 3001

const productsRouter = require('./routes/Products')

app.use(bodyParser.json());
app.use(cors())

app.use('/products',productsRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})