const express = require('express');

module.exports = function (server){
    //API Routes
    const router = express.Router();
    server.use('/api', router);
    
    //rota da API
    const billingCycleService = require('../api/billingCycle/billingCycleService');
    billingCycleService.register(router, '/billingCycles');
}