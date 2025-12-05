const router = require("express").Router();
const ctrl = require("./sale.controller");
const { auth } = require("../../core/auth");

router.post("/", auth(["worker", "admin", "superadmin"]), ctrl.createSale);


module.exports = router;
