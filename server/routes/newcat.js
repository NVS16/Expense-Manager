var express = require('express');
var app = express();
var catModel = require('../models/categories.model');


var router = express.Router();

router.post('/newcat', function(req, res){
    var catM = new catModel(req.body);
    console.log(req.body);
    catM.save(function(err, doc){
        if(err) throw err;
        res.json(doc);
    });
});

module.exports = router;