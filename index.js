const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors({
  origin: 'https://matrix-simplified.capturetheflags.site/', // Replace with your Flask server's URL
  credentials: true,  // Allow credentials (cookies) to be sent
}));

// Middleware to log the request
app.use((req, res, next) => {
  console.log('Request:', req.headers, req.method, req.url, req.statusCode, JSON.stringify(req.body), JSON.stringify(req.query));
  next(); // Pass the request to the next handler
});

// Route for "/"
app.use('/', (req, res) => {
  res.send('Welcome to the home page!');
});

// Route for "/report"
app.get('/report', (req, res) => {
  res.send('This is the report page!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
