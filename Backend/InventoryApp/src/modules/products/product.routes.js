const router = require("express").Router();
const ctrl = require("./product.controller");
const { auth } = require("../../core/auth");
// the routes well followed under the RBAC to product controller
router.post("/", auth(["admin", "worker", "superadmin"]), ctrl.createProduct);
router.get("/", auth(["admin", "worker", "superadmin"]), ctrl.getProducts);

module.exports = router;
