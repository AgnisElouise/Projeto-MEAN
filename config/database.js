const mongoose = require('mongoose');
module.exports = mongoose.connect('mongodb://agnis:agnis10@balta-shard-00-00-kwtej.azure.mongodb.net:27017,balta-shard-00-01-kwtej.azure.mongodb.net:27017,balta-shard-00-02-kwtej.azure.mongodb.net:27017/db_finance?ssl=true&replicaSet=Balta-shard-0&authSource=admin&retryWrites=true',
);
