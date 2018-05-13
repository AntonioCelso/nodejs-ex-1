'use strict';

angular.module('CompreCotasApp')
    .service('menuFactory', function() {

        var cotas=[
            {
                name:'Cota 500',
                image: './images/1.jpeg',
                category: 'Laranjeiras',
                price:'500,00',
                description: 'Cota com 50% quitada, ótimo local, bla, bla'
            },
            {
                name:'Cota 200',
                image: './images/2.jpeg',
                category: 'Amoreiras',
                price:'500,00',
                description: 'Cota com 50% quitada, ótimo local, bla, bla'
            },
            {
                name:'Cota 1000',
                image: './images/3.jpeg',
                category: 'Pitangueiras',
                price:'2000,00',
                description: 'Cota com 80% quitada, ótimo local, bla, bla'
            },
            
            
        ];

        this.getCotas = function(){
            return cotas;
        };

        this.getCota = function (index){
            return cotas[index];
        };

    });