const express = require('express');
const path = require('path');
require('dotenv').config();  // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3000;  // Use environment variable or default to 3000

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});