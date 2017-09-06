var express = require('express');
var catModel = require('../models/categories.model');
var router = express.Router();

router.post('/newexp', function(req, res){
    console.log(req.body);
    catModel.update({ name: req.body.cat },  { $push: { expNames: req.body.name,
         expAmounts: req.body.amt, expMeth: req.body.meth }, $inc: { totalExpAmount: req.body.amt } },
          function(err, docs){
        if(err) throw err;
        res.json(docs);
    });
});

module.exports = router;