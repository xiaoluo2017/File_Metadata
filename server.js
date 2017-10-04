var express = require('express');
var app = express();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));
app.use(express.static('views'));

app.get("/", function (req, res) {
  res.send("index.html");
});

app.post('/profile', upload.single('file_upload'), function (req, res, next) {
  res.send({size: req.file.size});
})

app.listen(8080, function() {
  console.log("Server start at port: 8080");
});
