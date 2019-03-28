// A hook that logs service method before, after and error
const util = require('util');
const consola = require('../logger');

module.exports = function() {
  return context => {
    // This debugs the service call and a stringified version of the hook context
    // You can customize the message to your needs
    consola.debug(
      `${context.type} app.service('${context.path}').${context.method}()`
    );

    if (typeof context.toJSON === 'function') {
      consola.debug('Hook Context', util.inspect(context, { colors: false }));
    }

    if (context.error && !context.result) {
      consola.error(context.error);
    }
  };
};
