'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/mp_servicioController');

  // mp_servicio Routes
  app.route('/mp_servicio')
    .get(mp_servicio.get_config)
    .post(mp_servicio.create_checkout);


  app.route('/mp_servicio/:checkoutId')
    .get(mp_servicio.get_checkout)
    .put(mp_servicio.update_checkout_status)
    .delete(mp_servicio.delete_checkout);
};
