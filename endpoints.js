const express = require('express');
const router = express.Router();
const Product = require('./database/product')

// API calls

router.get('/', (req, res) => {
    res.send('Hi');
  })

router.post('/addProduct', (req, res) => {
  console.log(req.body);
  const product = new Product({
    productCode: req.body.productCode,
    productName: req.body.productName,
    price: req.body.price,
    quantity: req.body.quantity
  });
  product.save().then((product) => {
    res.send(product);
  });
})

module.exports = router;
