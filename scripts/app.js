//creamos nuestro modulo llamado app
var app = angular.module("app", []);

//hacemos el ruteo de nuestra aplicación
app.config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl : "styles/templates/index.html"
	})
	.when("/addProd", {
 		title: 'Agregar Producto',
 		templateUrl : "styles/templates/addProd.html",
 		controller : "addProdController"
 	})
	.when("/editProd/:id", {
		title: 'Editar Producto',
		templateUrl : "styles/templates/editProd.html",
		controller : "editProdController"
	})
		.when("/removeProd/:id", {
 		title: 'Eliminar producto',
 		templateUrl : "styles/templates/removeProd.html",
 		controller : "removeProdController"
 	})
 	.otherwise({ redirectTo : "/"})
})
