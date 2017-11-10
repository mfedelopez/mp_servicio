'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ConfigSchema = new Schema({
  Mode: {
    type: String,
    required: 'Modo en el que se esta iniciando el servicio (Sandbox/Produccion).'
  },
  Public_Key: {
    type: String,
    required: 'Clave de acceso publico de la cuenta de MercadoPago configurada.'
  },
  Access_Token: {
    type: String,
    required: 'Token de acceso unico para poder operar.'
  },
  Client_id: {
    type: String,
    required: 'Clave de ID publico de la cuenta.'
  },
  Client_secret: {
    type: String,
    required: 'Clave de ID secreto de la cuenta.'
  },
});

module.exports = mongoose.model('Config', ConfigSchema);
