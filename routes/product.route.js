const express = require('express')
const router = express.Router()
const {getProducts, getSingleProduct, addProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js')


router.get('/',getProducts)
router.post('/',addProduct)
router.get('/:id',getSingleProduct)
router.get('/:id',updateProduct)
router.get('/:id',deleteProduct)


module.exports = router