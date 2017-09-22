var user = require('../controllers/userController');
var bomb = require('../controllers/bombController');
var authentication = require('../controllers/authController');

exports.endpoints = [
	{
		method: 'GET',
		path: '/',
		config: { handler: function (request, reply) { reply('API, examen 2') } }
	},
	{
		method: 'POST',
		path: '/user',
		config: user.createUser
	},
	{
		method: 'GET',
		path: '/user',
		config: user.getUsers
	},
	{
		method: 'GET',
		path: '/bomb',
		config: bomb.getBomb
	},
	{
		method: 'POST',
		path: '/bomb',
		config: bomb.createBomb
	},
	{
		method: 'PUT',
		path: '/bomb',
		config: bomb.modifyBomb
	},
	{
		method: 'DELETE',
		path: '/bomb',
		config: bomb.deleteBomb
	}
]