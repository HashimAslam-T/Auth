const express = require('express');
const control = require("../controllers/login");
const router = express.Router();

router.post("/login",control.login);

module.exports = router;
