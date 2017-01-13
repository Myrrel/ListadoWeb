app.controller("appController", function appController($scope){

	$scope.datos = [
		{	
			nombreCat : "JUGUETERIA",
			nombreProd : "Auto",
			precio : "24",
			imagen : "styles/img/auto.jpg"
		},
		{
			nombreCat : "JUGUETERIA",
			nombreProd : "Soldaditos en bolsa",
			precio : "20",
			imagen : "styles/img/soldaditos.jpg"
		},
		{	
			nombreCat : "BAZAR",
			nombreProd : "Plato hondo",
			precio : "10",
			imagen : "styles/img/platoh.jpg"
		},
		{
			nombreCat : "BAZAR",
			nombreProd : "Vaso trago largo",
			precio : "18",
			imagen : "styles/img/vaso.jpg"
		},
		{	
			nombreCat : "HERRAMIENTAS",
			nombreProd : "Pinza picoloro",
			precio : "56",
			imagen : "styles/img/pinzap.jpg"
		},
		{
			nombreCat : "HERRAMIENTAS",
			nombreProd : "Martillo",
			precio : "12",
			imagen : "styles/img/martillo.jpg"
		}
	];
	
	$scope.ordenCat = function (){
		var ult = $scope.datos.length ;
		var aux;
		while(ult > 0){
			for(var i = 0; i < ult ; i++){	
					console.log($scope.datos[i].nombreCat);
					if($scope.datos[ult-1].nombreCat < $scope.datos[i].nombreCat){
						aux = $scope.datos[i]; // 0
						$scope.datos[i] = $scope.datos[ult-1]; // en el 0 pongo el ult
						$scope.datos[ult-1] = aux; // en el ult pongo el 0
					} 
			}
			ult--;	
		}
	};
	$scope.ordenProd = function (){
		var ult = $scope.datos.length ;
		var aux;
		while(ult > 0){
			for(var i = 0; i < ult ; i++){	
					console.log($scope.datos[i].nombreProd);
					if($scope.datos[ult-1].nombreProd < $scope.datos[i].nombreProd){
						aux = $scope.datos[i]; // 0
						$scope.datos[i] = $scope.datos[ult-1]; // en el 0 pongo el ult
						$scope.datos[ult-1] = aux; // en el ult pongo el 0
					} 
			}
			ult--;	
		}
	};
	$scope.ordenPre = function (){
		var ult = $scope.datos.length ;
		var aux;	
		while(ult > 0){
			for(var i = 0; i < ult ; i++){	
					console.log($scope.datos[i].precio);
					if($scope.datos[ult-1].precio < $scope.datos[i].precio){
						aux = $scope.datos[i]; // 0
						$scope.datos[i] = $scope.datos[ult-1]; // en el 0 pongo el ult
						$scope.datos[ult-1] = aux; // en el ult pongo el 0
					} 
			}
			ult--;	
		}
	};
});


/*
			ADD 
*/
app.controller("addProdController", function addProdController($scope,$location){
	$scope.textButton = "Añadir un nuevo producto";
	$scope.producto = {};
	$scope.newProd = function(){
		$scope.datos.push($scope.producto);
		$location.url("/");
	}
});

/*
			EDIT 
*/
app.controller("editProdController", function editProdController($scope,$routeParams, $location){
	$scope.textButton = "Editar producto";
	$scope.producto = $scope.datos[$routeParams.id];
	$scope.editProd = function(){
		$scope.datos[$routeParams.id] = $scope.producto;
		$location.url("/");
	}
});

/*  *********************
				INFO 
********************   */
app.controller("infoProdController", function infoProdController($scope,$routeParams){
	$scope.producto = $scope.datos[$routeParams.id];
});                 


/*  ***********************************************
				            REMOVE
************************************************ */

app.controller("removeProdController", function removeProdController($scope,$routeParams, $location){
	$scope.producto = $scope.datos[$routeParams.id];
	$scope.removeProd = function(){
		$scope.datos.splice($routeParams.id,1);

		$location.url("/");
	}
});

/************************************************************/