/*

	routes.js

	definiremos los endpoints de la aplicacion y sus acciones.

*/

var Persona 	= require('./modelo/persona');
var Controller 	= require('./controller')

module.exports = function(app) {

	
	app.get('/api/persona', Controller.getPersona);

	app.post('/api/persona', Controller.setPersona);

	app.put('/api/persona/:persona_id', Controller.updatePersona);

	app.delete('/api/persona/:persona_id', Controller.deletePersona);

	app.get('*', function(req, res){
		res.sendfile('./angular/index.html')
	});
}