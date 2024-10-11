# What is Node.js?

### 1. JavaScript and Browser Engines
- JavaScript was originally designed as a browser language, meaning it could only be run inside web browsers.
- Different browsers come with different JavaScript engines:
  - **Google Chrome** uses the **V8** engine.
  - **Mozilla Firefox** uses **SpiderMonkey**.
  - **Apple Safari** uses **JavaScriptCore** (also known as Nitro).
  - **Microsoft Edge** (previously used Chakra) now also uses V8.

### 2. The Creation of Node.js
- Before Node.js, JavaScript could not run outside the browser environment.
- In 2009, **Ryan Dahl** utilized **Google's V8 engine**, which was open-source, and embedded it with C++.
- He called this new runtime environment **Node.js**.
- This made it possible to run JavaScript outside the browser, opening up new use cases beyond front-end web development.

### 3. JavaScript Beyond the Browser
- Node.js allowed JavaScript to interact with the native system, similar to other programming languages like **Python**, **Java**, or **C++**.
- Some tasks that became possible with Node.js include:
  - **File handling**: Reading and writing files on the local filesystem.
  - **Networking**: Making HTTP requests, handling server sockets, etc.
  - **Child processes**: Running shell commands or external programs.
  - **Event handling**: Implementing event-driven architectures for real-time applications.

### 4. Creating Web Servers
- Node.js can also be used to create lightweight, high-performance web servers.
- With Node.js, you don’t need an external web server like Apache or Nginx to serve requests. You can write and run your own web server in just a few lines of code using the **HTTP** module.
  
```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
