require('dotenv').config()
var express = require('express')
var router = express.Router();
var db = require('../models')

router.put('/', (req, res) =>{
    db.user.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        email: req.body.email
    }, {
    	where: {
    		id: req.body.id
        }
    }).then(user =>{
        console.log(user)
        res.send(user)
    })
})

module.exports = router;