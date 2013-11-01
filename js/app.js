//Define my app
var MyApp = angular.module('MyApp',[]);

var controllers = {};

//Create the controllers
controllers.MyController = function ($scope) {
	$scope.guests = [
		{ name: 'nmicht', count: 2, priority: 5 },
		{ name: 'Levhita', count: 2, priority: 5 },
		{ name: 'dresendez', count: 2, priority: 3 },
		{ name: 'camila', count: 4, priority: 1 }
	];
};


//Add the controllers
MyApp.controller(controllers);