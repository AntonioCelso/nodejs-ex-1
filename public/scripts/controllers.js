'use strict';

angular.module("ngComprecotaApp")

.controller('VendaController', ['$scope', 'vendaFactory', function ($scope,vendaFactory) {

    $scope.submitVenda = function(user) {
        vendaFactory.update(user);
        console.log(user);

    }


}])
;