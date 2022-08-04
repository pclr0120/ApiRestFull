'use strict';
const app = require('./app');
const config = require('./config');
app.listen(config.serverConfig.port, () => {
  console.log(`StartAPI http://localhost:${config.serverConfig.port}`);
});
