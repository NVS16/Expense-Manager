var express = require('express');
var path = require('path');
var app = express();

var mongoose = require('mongoose');
var url = "mongodb://localhost:27017/ExpenseList";
mongoose.connect(url);
var db = mongoose.connection;
db.once('open', function(){
    console.log("Connected to MongoDB...");
}).on('error', function(error){
    console.log("MongoDB Connection Error...", error);
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var cat = require('./server/routes/categories');
var newcat = require('./server/routes/newcat');
var newexp = require('./server/routes/newexp');

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', cat);
app.use('/', newcat);
app.use('/', newexp);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });

app.listen(3000, function(){
    console.log("Server is now listening to port 3000...");
});