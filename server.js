const express = require('express');
const app = express();

app.use(express.json());

// Import separate auth modules
const basicAuthRoute = require('./basicAuth');
const jwtAuthRoute = require('./jwtAuth');
const oauthAuthRoute = require('./oauth');

// Mount routes
app.use('/basic', basicAuthRoute);
app.use('/jwt', jwtAuthRoute);
app.use('/oauth', oauthAuthRoute);

// Import error handler
const errorHandler = require('./errorHandler');
app.use(errorHandler); // must be last

app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on http://0.0.0.0:3000');
});

