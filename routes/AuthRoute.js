const AuthController = require("../controllers/AuthController");
const express = require("express");
const router = express.Router();

router.post("/user/register", AuthController.register);
router.post("/user/signin", AuthController.signin);

module.exports = router;
