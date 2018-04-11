const express = require('express');
const app = express();
const path = require('path');
const auth = require('./routes/auth.js'); 
const collections = require('./routes/collections.js'); 
const bodyParser = require('body-parser'); 
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'client', 'public')));
app.use('/auth', auth)
app.use('/collections', collections)

app.get('*', (req,res, next) => {
  res.sendFile(__dirname, '/client', 'build', 'index.html');
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
  })

  module.exports = app;