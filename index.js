const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/products',productRoute)

app.get('/', (req, res) => {
    console.log('here on route ' + req.hostname)
    res.send('Hello from Node API Server')
})

app.listen(3000, () => {
    console.log('server is running on port 3000')
})

mongoose.connect(
    'mongodb+srv://aamir:atlas%40202@simple-crud.qi5tpcn.mongodb.net/?retryWrites=true&w=majority&appName=Simple-CRUD'
).then(() => {
    console.log('Database connected successfully!')
}).catch((error) => {
    console.log(error)
})