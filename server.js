const express = require('express');
const app = express();
const path = require('path');
const auth = require('./routes/auth.js'); 
const snapbook = require('./routes/snapbook.js')
const collections = require('./routes/collections.js'); 
const profile = require('./routes/profile.js');
const bodyParser = require('body-parser'); 
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'client', 'build')));
app.use('/auth', auth)
app.use('/collections', collections)
app.use('/snapbook', snapbook)
app.use('/profile', profile)

app.get('*', (req,res, next) => {
  console.log('Hit')
  res.sendFile(__dirname, '/client', 'build', 'index.html');
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
  })
  

  module.exports = app;