require('dotenv').config()
var express = require('express')
var router = express.Router();
var passport = require('../config/ppConfig')
var user = require('../models/user')

router.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  }));

  module.exports = router;