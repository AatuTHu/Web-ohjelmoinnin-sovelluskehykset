const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 3000

const shopProducts = require('./routes/shopProducts')
const user = require('./routes/user')
const purchase = require('./routes/purchase')

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.use('/shopProducts', shopProducts)
app.use('/user', user)
app.use('/purchase', purchase)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})