/*
	server.js

	configuracion del servidor
*/

var express 	= require('express');
var app 		= express();				//utilizamos express
var mongoose 	= require('mongoose'); 		//mongoose para la BD
var port 		= process.env.PORT || 8080;	//utilizamos el puerto 8080

//configuración

mongoose.connect('mongodb://localhost:27017/MeanExample');

app.configure(function(){
	app.use(express.static(__dirname + '/angular'));
	app.use(express.logger('dev'));			//activamos modo dev
	app.use(express.bodyParser());
	app.use(express.methodOverride());
});


//cargamos los endpoints

require('./app/routes.js')(app);

//cogemos el puerto para escuchar y mostramos por consola
app.listen(port);
console.log('App en el puerto ' + port);