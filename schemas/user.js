var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var userSchema = new mongoose.Schema({
	username: {type: String, unique: true},
	password: String,
	scope: [String],
});

module.exports = mongoose.model('user', userSchema);