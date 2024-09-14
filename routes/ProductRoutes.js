const TagController = require("../controllers/TagController");
const express = require("express");
const router = express.Router();

router.post("/tag/insert", TagController.insert);
router.get("/tag/list", TagController.list);

module.exports = router;
