var express = require("express");
var router = express.Router();
var checkSessionAuth = require("../middlewares/checkSessionAuth");
var {Order,validate} = require("../models/order");
//console.log(Category);
/* GET home page. */
router.get("/", async function (req, res, next) {
	let orders = await Order.find();
	res.render("orders/list", { title: "Order management", orders });
});

router.get("/add", checkSessionAuth, async function (req, res, next) {
	res.render("orders/add");
});

router.post("/add", async function (req, res, next) {
	const { error } = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);
	let order = new Order(req.body);
	await order.save();
	res.redirect("/orders");
});
router.get("/delete/:id", async function (req, res, next) {
	let order = await Order.findByIdAndDelete(req.params.id);
	res.redirect("/orders");
});



module.exports = router;
