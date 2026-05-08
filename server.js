const express = require('express');
const app = express();

// Middleware to parse JSON request body
app.use(express.json());

// Example POST endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'secret') {
    res.status(200).json({ message: 'Login successful', token: 'abc123' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
