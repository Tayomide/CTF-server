const express = require('express');
const app = express();
const port = 3000;

const tempHeaders = (req, res, next) => {
  if (req.headers.origin === 'https://matrix-simplified.capturetheflags.site' || !req.headers?.origin) {
    res.header('Access-Control-Allow-Origin', 'https://matrix-simplified.capturetheflags.site')
    res.header('Access-Control-Allow-Credentials', 'true')
  } else {
    res.header('Access-Control-Allow-Origin', '*')
  }
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, credentials')
  next()
}
app.use(tempHeaders);

// Middleware to log the request
app.use((req, res, next) => {
  console.log(req.headers.origin, req.headers.cookie)
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
