const { Consola, FancyReporter } = require('consola');

const logger = new Consola({
  level: 3, // Info level
  reporters: [new FancyReporter()],
  types: []
});

module.exports = logger;
