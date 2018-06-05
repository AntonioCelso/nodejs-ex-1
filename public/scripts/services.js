'use strict';

angular.module("ngComprecotaApp")

   .constant("baseURL", "http://localhost:8080/")
    
    .factory('vendaFactory',['$resource','baseURL', function($resource, baseURL){
       
        return $resource(baseURL + "cotas", null, {
            'update': {
                method: 'POST'
            }
        });
    }])

    .factory('compraFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

        return $resource(baseURL + "cotas/:id");

    }])
;