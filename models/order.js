var mongoose = require("mongoose");
const Joi = require("@hapi/joi");


var orderrSchema = mongoose.Schema({
	serial_no: String,
    quantity: Number,
    address: String,
    payment: String
});
const Order = mongoose.model("Order", orderrSchema);


function validateOrder(data) {
	const schema = Joi.object({
		serial_no: Joi.string().min(3).max(20).required(),
        payment: Joi.string().required(),
        address: Joi.string().required(),
        quantity: Joi.string()

	});
	return schema.validate(data, { abortEarly: false });
  }
  module.exports.Order = Order;
  module.exports.validate = validateOrder;


