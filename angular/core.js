angular.module('MainApp', [])

function mainController($scope, $http){

	$scope.newPersona 	= {};
	$scope.personas 	= {};
	$scope.selected 	= false;


	//obtenemos todos los datos de las personas de la base de datos..
	$http.get('/api/persona')
		.success(function(data){
			$scope.personas = data;
		});
		.error(function(data){
			console.log("ERROR: " + data);
		});

	//funcion para registrar una persona..
	$scope.registrarPersona = function(){

		$http.post('/api/persona', $scope.newPersona)
			.success(function(data){
				$scope.newPersona = {};	//borramos los datos del formulario..
				$scope.personas   = data;
			});
			error(function(data){
				console.log('ERROR: ' + data);
			});
	}

	//funcion para modificar/editar los datos de una persona
	$scope.modificarPersona = function(newPersona){

		$http.put('api/persona' + $scope.newPersona._id, $scope.newPersona)
			.sucess(function(data){
				$scope.newPersona = {}; //borramos los datos del formulario
				$scope.personas   = data;
				$scope.selected	  = false;
			})
			.error(function(data){
				console.log('ERROR: ' + data);
			})
	}

	//funciion para borrar un objecto mediante su id
	$scope.eliminarPersona = function(newPersona){

		$http.delete('api/persona' + $scope.newPersona._id)
			.success(function(data){
				$scope.newPersona = {};
				$scope.personas	  = data;
				$scope.selected   = false;
			})
			.error(function(data){
				console.log("ERROR: " + data);
			})
	}

	$scope.selectPersona = function(persona){

		$scope.newPersona = persona;
		$scope.selected = true;
		console.log($scope.newPersona, $scope.selected);
	}
}