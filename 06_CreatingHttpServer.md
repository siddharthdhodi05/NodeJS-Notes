# Creating an HTTP Server in Node.js

### The `http` Module
- The **`http`** module in Node.js provides functionality to create a basic HTTP server. This is useful for building web servers that can handle HTTP requests and send back responses.

---

### Steps to Create an HTTP Server

1. **Import the `http` module**
   - First, you need to import the `http` module using the `require()` function.

2. **Create a server using `http.createServer()`**
   - The `createServer()` method creates a new server object.
   - It takes a callback function as an argument that is executed every time an HTTP request hits the server.
   - The callback function has two parameters:
     - **`req`**: Represents the request object, containing information about the incoming request.
     - **`res`**: Represents the response object, used to send a response back to the client.

3. **Use `listen()` to make the server listen on a specific port**
   - The `listen()` function makes the server listen for incoming requests on a specific port (e.g., 3000).

---

### Example Code: Creating a Basic HTTP Server

```js
// Step 1: Import the http module
const http = require('http');

// Step 2: Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the status code and headers for the response
  res.statusCode = 200;  // OK status
  res.setHeader('Content-Type', 'text/plain');  // Plain text response

  // Send the response body
  res.end('Hello, World!\n');
});

// Step 3: Make the server listen on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
