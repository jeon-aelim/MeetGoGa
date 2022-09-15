// const express = require('express')
// const app = express()
// const PORT = 8002;
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs')
// app.get('/', (req, res) => {
//   res.render('index')
// })
// app.listen(PORT, () => {
//     console.log(`server started on PORT ${PORT}`)
// })

const express = require('express');
const router = require('./routes');
const sequelize = require('./models').sequelize;
const methodOverride = require('method-override');
const http = require('http');
const cors = require('cors');
const ejs = require("ejs");



var url = require('url');
var fs = require('fs');
const { reset } = require('nodemon');


const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(methodOverride());
app.use(cors());
app.engine("html", ejs.renderFile);

// var resourcePath='C:\Users\82109\Server\RomanFIrst-1\html';
sequelize.sync();
app.use('/', router);

app.get('/', (req, res) => {
  res.render('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/views/index.ejs')
});

app.get('/imgTest', (req, res) => {
  res.render('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/images/1663168033544-bezkoder-earth.jpg')
});


app.get('/test', (req, res) => {
  res.render('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/views/meetgo.html')
});

app.use(express.static("images"));


http.createServer(app).listen(8002, () => {
  console.log("Express Server Start");
});

