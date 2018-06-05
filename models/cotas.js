
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

// create a schema
var cotaSchema = new Schema({
    firstname: {
        type: String
    },
	
	lastname: {
        type: String
    },
    
	image: {
        type: String
    },
	
	email: {
        type: String
    },

	cel: {
        type: String
    },

	fone: {
        type: String
    },

    reference: {
        type: String
    },
    prefercontact: {
        type: String
    },

	 pagamento: {
        type: String
    },
    price: {
        type: Currency
    },
    commission:{
        type:Currency
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
