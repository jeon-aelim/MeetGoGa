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

const multer = require("multer");


// const JSON = require("json");

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
  // const results = JSON.parse(data.toString('utf8'));
  // res.sendFile('index', { title:"meetgoga", results });
  res.render('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/views/index.ejs')
});

app.get('/test', (req, res) => {
  // const results = JSON.parse(data.toString('utf8'));
  // res.sendFile('index', { title:"meetgoga", results });
  res.render('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/views/meetgo.html')
});
app.get('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/images', (req, res) => {
  // const results = JSON.parse(data.toString('utf8'));
  // res.sendFile('index', { title:"meetgoga", results });
  res.render('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/images')
});



http.createServer(app).listen(8002, () => {
  console.log("Express Server Start");
});


// const fileStorage = multer.diskStorage({ // 저장 방식
//   destination: (req,file,cb)=>{ // 저장되는 곳 지정 
//       cb(null, 'images');
//   },
//   filename: (req,file,cb)=>{ // 저장되는 이름 지정 
//       cb(null, Date.now() + path.extname(file.originalname));
//       console.log();
//   }
// });


// const upload = multer({storage: fileStorage});

// app.get("/upload", (req,res) => {
//   res.render("upload.ejs");
// });

// app.post("/upload", upload.single("image"), (req,res) => {
//   res.send("Img Uploaded");
// });

// const fileFilter = (req,file,cb) => { // 확장자 필터링 
//   if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
//       cb(null,true); // 해당 mimetype만 받겠다는 의미 
//   }
//   else{ // 다른 mimetype은 저장되지 않음 
//       cb(null,false);
//   }
// };
// app.use(multer({storage :fileStorage, fileFilter:fileFilter}).single('image')); // 라우터 ``````npmm start