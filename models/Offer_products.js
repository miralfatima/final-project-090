var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var OfferSchema = mongoose.Schema({
	name: String,
	price: String,
});
const OfferProduct = mongoose.model("OferProduct", OfferSchema);


function validateOffer(data) {
	const schema = Joi.object({
		name: Joi.string().min(3).max(20).required(),
		price: Joi.string().required(),

	});
	return schema.validate(data, { abortEarly: false });
  }
  module.exports.OfferProduct = OfferProduct;
  module.exports.validate = validateOffer;


