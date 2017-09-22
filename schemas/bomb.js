var mongoose = require('mongoose');

var bombSchema = new mongoose.Schema({
	nombre:String,
	peso: String,
	tipo:String,
	detonada:Boolean,
	destino:String,
	energia:String
});


module.exports = mongoose.model('Bomb', bombSchema);