const express = require("express");
const servController = require("../controller/servController");

const router = express.Router();

router.post("https://my-api-five-delta.vercel.app", servController.create);

module.exports = router;