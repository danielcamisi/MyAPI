const express = require("express");
const servController = require("../controller/servController");

const router = express.Router();

router.post("/", servController.create);

module.exports = router;