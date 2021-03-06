const express = require('express');
const router = express.Router();
const Product = require('./database/product')

// API calls
// Add a new product
router.post('/addProduct', (req, res) => {
  console.log("Server", req.body);
  const product = new Product({
    productCode: req.body.productCode,
    productName: req.body.productName,
    price: req.body.price,
    quantity: req.body.quantity,
    description: req.body.description
  });
  product.save().then((product) => {
    res.send(product);
  });
})

// Fetch all the products and sort them from the newer to the older
router.get('/getProducts', (req, res) => {
  Product.find({}).sort({date: -1}).then((products) => {
    res.send(products);
  });
})

// Delete a product by its code (product code)
router.post('/deleteProduct', (req, res) => {
  Product.findOneAndDelete({productCode: req.body.productCode})
  .then((product) => {
    res.send(product)
  });
})


// Edit an existing product
router.put('/editProduct', (req, res) => {
  let productCode = req.body.productCode;
  let productName = req.body.productName;
  let price = req.body.price;
  let quantity = req.body.quantity;
  let image = req.body.image;
  let description = req.body.description;

  Product.findOneAndUpdate({productCode: productCode}, 
    {productName: productName, price: price, quantity: quantity, image: image, description: description})
    .then((product) => {
      res.send(product)
    });
})


module.exports = router;
