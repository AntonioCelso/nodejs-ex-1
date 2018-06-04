var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var mongoose=require('mongoose');
var Cotas = require('../models/cotas');

var cotasRouter = express.Router();
cotasRouter.use(bodyParser.json());


cotasRouter.route('/')

.get(function(req,res,next){
    Cotas.find({}, function (err, cota) {
        if (err) throw err;
        res.json(cota);
    });       
})

.post(function(req, res, next){
    Cotas.create(req.body, function (err, cota) {
        if (err) throw err;
        console.log('cota criada');
        var id = cota._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Cota adcionada: ' + id);
    }); 
})

.delete(function(req, res, next){
        Cotas.remove({}, function (err, resp) {
        if (err) throw err;
        res.json(resp);
    });
});


cotasRouter.route('/:cotaId')

.get(function(req,res,next){
        Cotas.findById(req.params.cotaId, function (err, cota) {
        if (err) throw err;
        res.json(cota);
    });
})

.put(function(req, res, next){
        Cotas.findByIdAndUpdate(req.params.cotaId, {
        $set: req.body
    }, {
        new: true
    }, function (err, cota) {
        if (err) throw err;
        res.json(cota);
    });
})

.delete(function(req, res, next){
        Cotas.findByIdAndRemove(req.params.cotaId, function (err, resp) {        
            if (err) throw err;
        res.json(resp);
    });
});



module.exports = cotasRouter;
