var express = require('express');
var catModel = require('../models/categories.model');
var router = express.Router();

router.get('/categories', function(req, res){
    catModel.find({}, function(err, docs){
        res.json(docs);
    });
});

module.exports = router;