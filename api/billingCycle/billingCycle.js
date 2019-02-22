const restful = require('node-restful');
const moongose = restful.moongose;

const creditschema = new moongose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: true }
});

const debtschema = new moongose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: true },
    status: { type: String, required: false, uppercase:true,  
        enum: ['PAGO', 'PENDENTE', 'AGENDADO']}
});

const billingCycleSchema = new moongose.Schema({
    name: { type: String, required: true },
    month: { type: Number, min: 1, max: 12,  required: true }, 
    year: { type: Number, min: 1970, max:2100, required:true },
    credits: [creditschema],
    debts: [debtschema]
});

module.exports = restful.model('BillingCycle', billingCycleSchema);