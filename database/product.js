const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create product schema and model
const ProductSchema = new Schema({
	  productCode: {
			type: String,
			required: true
    },
    productName: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
    price: {
			type: Number,
			required: true
    },
    quantity: {
			type: Number,
			required: true
	  },
    image: {
			type: String,
			required: false,
			default:'https://getmystamp.com/assets/dist/img/bg/security.png'
	  },
    date: {
			type: Date,
			default: Date.now
	  }
});


module.exports = mongoose.model('product', ProductSchema);