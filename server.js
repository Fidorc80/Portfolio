const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8081;

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, '/')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

// Handle 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});