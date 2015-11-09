/*

	persona.js

	Modelo de persona en la bd

*/

var mongoose = require('mongoose');

module.exports = mongoose.model('Persona', {
	nombre: String,
	apellido: String,
	edad: String
});