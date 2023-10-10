const express = require('express');
const control = require("../controllers/signup");
const router = express.Router();

router.post("/register",control.signUp);

module.exports = router;
