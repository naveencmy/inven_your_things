const router = require("express").Router();
//routes the sales and service:
router.use("/products", require("../modules/products/product.routes"));
router.use("/sales", require("../modules/sales/sale.routes"));
// routes to the authandication to both admin&worker
router.use("/auth", require("../modules/auth/auth.routes"));

//[IN later we well add the Super-admin] routes :


module.exports = router;
