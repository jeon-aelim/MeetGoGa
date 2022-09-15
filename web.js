
const express = require('express');
const router = require('./routes');
const sequelize = require('./models').sequelize;
const methodOverride = require('method-override');
const http = require('http');
const cors = require('cors');
const ejs = require("ejs");
const path = require("path");

var url = require('url');
var fs = require('fs');
const { reset } = require('nodemon');


const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride());
app.use(cors());
app.engine("html", ejs.renderFile);

sequelize.sync();
app.use('/', router);

app.get('/', (req, res) => {
  res.render('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/views/index.ejs')
});
app.get('/test', (req, res) => {
  res.render('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/views/meetgo.html')
});
app.get('/main', (req, res) => {
  res.render('index.html')
});

app.use(express.static(__dirname + "/views/build"));

app.use(express.static("images"));


http.createServer(app).listen(8002, () => {
  console.log("Express Server Start");
});

