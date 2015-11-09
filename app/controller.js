/*

	controller.js

	en el controlador definimos las funciones de cada llamada  de la API REST

*/

var Persona = require('./modelo/persona');

exports.getPersona = function(req, res){

	Persona.find(function(err, persona){
		if(err)
		{
			res.send(err);
		}else{
			res.json(persona);
		}
	});
}

exports.setPersona = function(request, res){

	Persona.create(
		{
			nombre : request.body.nombre, 
			apellido : request.body.apellido, 
			edad : request.body.edad
		}, 
			function(err, persona){
				if(err){
					res.send(err);
				}else{
					res.json(persona);
				}
			})
}

exports.updatePersona = function(req, res){

	Persona.update(
		{_id : req.params.persona_id},
		{$set:
			{
				nombre: req.body.nombre, 
				apellido: req.body.apellido, 
				edad: req.body.edad
			}
		}, function(err, persona){
			if(err){
				res.send(err);
			}else{
				res.json(persona);
			}

			Persona.find(function(err, persona){
				if(err){
					res.send(err);
				}else{
					res.json(persona);
				}
			});
		});
}

exports.deletePersona = function(request, res){

	Persona.remove(
		{
			_id : request.params.persona_id
		}, function(err, persona){
			if(err)
				res.send(err);

			Persona.find(function(err, persona){
				if(err){
					res.send(err);
				}else{
					res.json(persona);
				}
			});
		});	
}