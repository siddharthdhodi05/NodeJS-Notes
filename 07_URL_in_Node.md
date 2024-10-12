# Understanding URL Structure and the `url` Module in Node.js

### 1. URL Structure
A **URL (Uniform Resource Locator)** consists of several parts:

- **Protocol**: Specifies the communication protocol (e.g., `http`, `https`).
- **Domain**: The domain name or IP address of the server (e.g., `www.example.com`).
- **Path**: The specific resource being requested (e.g., `/home`, `/products`).
- **Query Parameters**: A set of key-value pairs that provide additional data to the server (e.g., `?id=123&name=John`).

#### Example URL Breakdown:
https://www.example.com/products?id=123&name=John

- **Protocol**: `https`
- **Domain**: `www.example.com`
- **Path**: `/products`
- **Query Parameters**: `id=123`, `name=John`

---

### 2. The `url` Module in Node.js
- The `url` module provides utilities for URL parsing and manipulation.
- It is built into Node.js, so you don't need to install it separately, but for deeper functionality (like handling WHATWG-compliant URLs), you can use the updated `URL` class.

---

### 3. Parsing URLs Using the `url` Module

- The **`url.parse()`** method allows you to decompose a URL into its various components.

#### Example Code: Parsing a URL
```js
const url = require('url');

const myUrl = 'https://www.example.com/products?id=123&name=John';

const parsedUrl = url.parse(myUrl, true);

console.log(parsedUrl.protocol);  // 'https:'
console.log(parsedUrl.hostname);  // 'www.example.com'
console.log(parsedUrl.pathname);  // '/products'
console.log(parsedUrl.query);     // { id: '123', name: 'John' }

url.parse(urlString, true):
The second argument (true) ensures that the query parameters are parsed into an object.
```
---
```js
const http = require('http');
const url = require('url');

// Create a server
http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);  // Parse the incoming request URL
  
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;  // Get the query parameters
  
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write(`You requested ${pathname}\n`);
  res.write(`Query parameters: ${JSON.stringify(query)}`);
  res.end();
}).listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
