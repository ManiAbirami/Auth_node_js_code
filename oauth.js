const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const SECRET_KEY = 'mysecretkey';

router.post('/token', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'secret') {
    const token = jwt.sign({ user: username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ access_token: token, token_type: 'Bearer' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
