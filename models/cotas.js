
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

// create a schema
var cotaSchema = new Schema({
    name: {
        type: String
    },
    image: {
        type: String
    },
    reference: {
        type: String
    },
    label: {
        type: String
    },
    price: {
        type: Currency
    },
    commission:{
        type:Currency
    },
    description: {
        type: String
    },
    publish: {
        type: Boolean
    }
}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Cotas = mongoose.model('Cota', cotaSchema);

// make this available to our Node applications
module.exports = Cotas;
