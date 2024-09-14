const PostController = require("../controllers/PostController");
const express = require("express");
const router = express.Router();

router.post("/post/insert", PostController.insert);
router.get("/post/list", PostController.list);
router.post("/post/insertWithTag", PostController.insertwithTag);

module.exports = router;