const express = require("express");
const router = express.Router();
const api  = require('./api.js');

router.use("/api", api);

module.exports = router;
