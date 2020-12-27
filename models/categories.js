var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var categoriesSchema = mongoose.Schema({
	type: String,
	brand: String,
	name: String,
	price: String,
});
const Category = mongoose.model("Category", categoriesSchema);



function validatecategory(data) {
	const schema = Joi.object({
		name: Joi.string().min(3).max(20).required(),
		brand: Joi.string().min(3).max(20).required(),
		type: Joi.string().min(3).max(20).required(),
		price: Joi.string().required(),

	});
	return schema.validate(data, { abortEarly: false });
  }
  module.exports.Category = Category;
  module.exports.validate = validatecategory;



