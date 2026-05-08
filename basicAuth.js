const express = require('express');
const basicAuth = require('basic-auth');
const router = express.Router();

router.post('/login', (req, res) => {
  const user = basicAuth(req);
  if (user && user.name === 'admin' && user.pass === 'secret') {
    res.json({ message: 'Basic Auth successful' });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

module.exports = router;
