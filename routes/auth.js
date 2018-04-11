require('dotenv').config()
var express = require('express')
var router = express.Router();
var db = require('../models')
var bcrypt = require('bcrypt')
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken')

router.post("/login", (req, res, next)=>{
  console.log('Login Auth Route')
  let hashedPass = ''
  let passwordMatch = false
})

router.post("/signup", (req, res, next)=>{
  console.log('Signup Auth Route')
  db.user.findOrCreate({
    where: {email: req.body.email},
    defaults:{
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      userName: req.body.userName,
      password: req.body.password
    }
  }).spread( (user, created) =>{
    if(created){
      var token = jwt.sign(user.dataValues, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24
      })
      res.json({user, token})
    }else{
      // console.log(user.dataValues)
      // var token = jwt.sign(user.dataValues, process.env.JWT_SECRET, {
      //   expiresIn: 60 * 60 * 24
      // })
      // res.json({user, token})
      res.send("Account Already Exists, Please goto Login Page")
    }
  })
})


module.exports = router;