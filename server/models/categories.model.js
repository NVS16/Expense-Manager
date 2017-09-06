var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var catSchema = new Schema({
    name: String,
    limit: Number,
    expNames: [String],
    expAmounts: [Number],
    totalExpAmount: Number,
    expMeth: {type: [String], enum: ["Cash", "Debit Card", "Credit Card", "E-Wallet", "Net Banking"] }
});

var catModel = mongoose.model('categories', catSchema);

module.exports = catModel;