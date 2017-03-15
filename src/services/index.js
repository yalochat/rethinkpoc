'use strict';
const authentication = require('./authentication');


module.exports = function() {
  const app = this

  app.configure(authentication)
}
