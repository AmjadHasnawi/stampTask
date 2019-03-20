const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create profile schema and model for the teacher
const ProductSchema = new Schema({
	productCode: {
		type: String,
		required: true
    },
    productName: {
		type: String,
		required: true
    },
    price: {
		type: Number,
		required: true
    },
    quantity: {
		type: Number,
		required: false
	},
    image: {
		type: String,
		required: false,
		default:'https://www.eigenheimreal.com/avatar_mann.png'
	},
    date: {
		type: Date,
		default: Date.now
	}
});


module.exports = mongoose.model('product', ProductSchema);