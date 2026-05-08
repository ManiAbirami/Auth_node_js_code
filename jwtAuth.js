const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const SECRET_KEY = 'mysecretkey';

router.post('/token', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'secret') {
    const token = jwt.sign({ user: username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ access_token: token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

router.get('/secure', (req, res) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ message: 'Missing token' });

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    res.json({ message: 'Secure data accessed', user: decoded.user });
  } catch {
    res.status(403).json({ message: 'Invalid or expired token' });
  }
});

module.exports = router;
