const router = require("express").Router();
const ctrl = require("./auth.controller");
const { auth } = require("../../core/auth");
// if some have need , they can register (admin creates workers)
router.post("/register", ctrl.register);

// Login form function routes for admin & worker
router.post("/login", ctrl.login);
// It well help to create_worker to  the Admin & Superadmin create workers
router.post("/create-worker", auth(["admin", "superadmin"]), ctrl.createWorker);

module.exports = router;
