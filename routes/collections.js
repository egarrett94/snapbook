require('dotenv').config()
var express = require('express')
var router = express.Router();
var multer = require('multer');
var upload = multer({ dest: './uploads/'});
var db = require('../models')
var cloudinary = require('cloudinary')


cloudinary.config({ 
    cloud_name: 'kylecloud', 
    api_key: process.env.CLOUD_KEY, 
    api_secret: process.env.CLOUD_SECRET 
})

router.post('/', upload.single("myFile"), (req, res) =>{
    console.log('here')
    var newPicUrl = ''
    console.log(req.file)
    cloudinary.uploader.upload(req.file.path, (result) => {
    }).then((result) =>{
        newPicUrl = result.url
        db.photo.create({
            url: newPicUrl,
            user_id: req.body.userId
        }).then(result =>{
            db.photo.findAll({
                where:{user_id: req.body.userId}
            }).then(data =>{
                res.redirect('/collections')
            })
        })
    }) 
})

router.post('/index', (req, res) =>{
    db.photo.findAll({
        where:{user_id: req.body.userId}
    }).then(data =>{
        res.send(data)
    })
})

module.exports = router;