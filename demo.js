// Import the http module
const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response status code and header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // End the response with a message
  res.end('Hello World');
});

// Start the server and listen for requests
server.listen(port, hostname, () => {
  // Log a message when the server is ready
  console.log(`Server running at http://${hostname}:${port}/`);
});
