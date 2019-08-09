const express = require('express')
const app = express()

const port = 3006

const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

app.get('/api/products', getProducts)

app.get('/api/products/:id', getProduct)


app.listen(port, () => {
    console.log(`Serving on ${port}`)
})