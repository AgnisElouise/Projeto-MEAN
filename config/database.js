const mongoose = require('mongoose');
module.exports = mongoose.connect('mongodb://agnis:agnis10@balta-shard-00-00-kwtej.azure.mongodb.net:27017,balta-shard-00-01-kwtej.azure.mongodb.net:27017,balta-shard-00-02-kwtej.azure.mongodb.net:27017/db_finance?ssl=true&replicaSet=Balta-shard-0&authSource=admin&retryWrites=true',
);
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório.";
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'.";
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'.";
mongoose.Error.messages.String.enum = "O '{VALUE}' não é valido para o atributo '{PATH}'.";
