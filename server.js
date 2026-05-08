const express = require('express');
const app = express();

app.use(express.json());

// Import separate auth modules
const basicAuthRoute = require('./basicAuth');
const jwtAuthRoute = require('./jwtAuth');
const oauthAuthRoute = require('./oauthAuth');

// Mount routes
app.use('/basic', basicAuthRoute);
app.use('/jwt', jwtAuthRoute);
app.use('/oauth', oauthAuthRoute);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
