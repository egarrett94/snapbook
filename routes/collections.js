require('dotenv').config()
var express = require('express')
var router = express.Router();
var db = require('../models')


router.post('/', (req, res) =>{
    console.log('Collections Post Route')
    res.send('get fucked')
})

module.exports = router;