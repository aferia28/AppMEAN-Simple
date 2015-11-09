/*
	server.js

	configuracion del servidor
*/

var express 	= require('express');
var app 		= express();				//utilizamos express
var mongoose 	= require('mongoose'); 		//mongoose para la BD
var port 		= process.env.PORT || 8080;	//utilizamos el puerto 8080

//configuración

mongoose.connect