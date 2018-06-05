'use strict';

angular.module("ngComprecotaApp")

.controller('VendaController', ['$scope', 'vendaFactory', function ($scope,vendaFactory) {

    $scope.vendaCotaForm=false;
    $scope.user = {};

    var oriuser= angular.copy($scope.user);

    $scope.submitVenda = function(user) {
        
        user.commission = "0,00";
        user.publish = false;
        user.image = "./images/1.jpeg";
    
        vendaFactory.update(user)
        .$promise.then(
            function (response) {
                $scope.vendaCotaForm = true;
                $scope.nomeVendedor = user.name;
                
                $scope.user = angular.copy(oriuser);
                $scope.vendaCotas.$setPristine()
                $scope.vendaCotas.$setUntouched()
                
                console.log(user);
            },
            function (response) {
                console.log(response);
            }
        );
    }
}])

.controller('compraController', ['$scope','compraFactory', function ($scope,compraFactory){

    $scope.vendas;

    compraFactory.query(function (data){
        
        $scope.vendas=data;
     },
      function (response) {
          $scope.message = "Error: " + response.status + " " + response.statusText;
        }
    );

}]);