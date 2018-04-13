require('dotenv').config()
var express = require('express')
var router = express.Router();
var db = require('../models')

router.post('/generate', (req, res) => {
    var returnId = ''
    console.log(req.body.selectedPics)
    db.snapbook.create({
        name: req.body.bookTitle,
        template: req.body.template,
        user_id: req.body.userId
    }).then(snapbook => {
        returnId = snapbook.id
        req.body.selectedPics.forEach((photo, i) => {
            db.photo.find({
                where: {url: photo}
            }).then(photo => {
                console.log(snapbook.id)
                snapbook.addPhoto(photo).then((data)=>{
                    console.log('added photo to book')
                })
            })
        })
    }).then(snapbook => {
        res.send(returnId.toString())
    })
})

router.get('/:id', (req, res) => {
    let retBook = {
        title: '',
        layout: '',
        pics: []
    }
    var temp = []
    db.snapbook.find({
        where: {id: req.params.id}
    }).then((book) => {
        retBook.title = book.name
        retBook.layout = book.template
        book.getPhotos().then((photos) => {
            temp = photos
        }).then((photos) => {
            retBook.pics = temp
            res.send(retBook)
        })
    })
})

module.exports = router;