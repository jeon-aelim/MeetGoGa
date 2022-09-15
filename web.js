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
 const path = require("path");

var url = require('url');
var fs = require('fs');
const { reset } = require('nodemon');

// fs.readdir('/images', (err) => {
//   if (err) {
//       fs.mkdirSync('/images');
//   }
// })

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
app.get('/test', (req, res) => {
  res.render('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/views/meetgo.html')
});
app.get('/main', (req, res) => {
  res.render(path.join(__dirname, '/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/views/build/index.html'))
});
app.use(express.static("images"));


http.createServer(app).listen(8002, () => {
  console.log("Express Server Start");
});

