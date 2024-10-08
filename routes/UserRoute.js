const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");
router.post("/user/insert", UserController.insert);
router.post("/user/insertWithAddress", UserController.insertWithAddress);
router.post("/user/insertWithContact", UserController.insertWithContact);
router.get("/user/list", UserController.list);
router.post("/user/login", UserController.login);
router.delete("/user/delete/:id", UserController.delete);
module.exports = router;

