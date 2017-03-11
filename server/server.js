var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db/connector');

var app = express();
var PORT = 3000;

app.use(express.static(path.join(__dirname, '../public')))
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/api/latest', function (req, res) {
  db.latest(req.query).then((data) => {
    res.send(data);
  })
});

app.get('/api/search', (req, res) => {
  db.search(req.query).then((data) => {
    res.send(data);
  })
});

app.get('/api/districts', (req, res) => {
  db.getDistricts().then(data => {
    res.send(data);
  })
});

app.get('/api/contractTypes', (req, res) => {
  db.getContractTypes().then(data => {
    res.send(data);
  })
});

app.get('/api/getUnique', (req, res) => {
  db.getUnique(req.query.field).then(data => {
    res.send(data);
  });
});

app.get('/op/:id', function (req, res) {
  db.getByRef(req.params.id).then(data => {
    res.send(data);
  });
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}!  from ${__dirname}`)
});
