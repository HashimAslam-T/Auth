const express = require('express');
const control = require("../controllers/profile");
const router = express.Router();

router.get("/profile",control.profile);

module.exports = router;
