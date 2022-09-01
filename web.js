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
const router = require('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/routes');
const sequelize = require('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/models').sequelize;
const methodOverride = require('method-override');
const http = require('http');
const cors = require('cors');
const ejs = require("ejs");

var url = require('url');
var fs = require('fs');

// 내방식대로 바꿔서 코딩하는것은 실패 다시 해봐야할 것 새로운 파일을 만들어서 저 방식대로 해보기

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json()); 



app.use(methodOverride());
app.use(cors());
app.engine("html", ejs.renderFile);

var resourcePath='C:\Users\82109\Server\RomanFIrst-1\html';
sequelize.sync();
app.use('/', router);

app.get('/', (req, res) => {
  res.render('video.html');
});
http.createServer(app).listen(8002, () => {
  console.log("Express Server Start");
});

