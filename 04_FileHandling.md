# File Handling in Node.js

### The `fs` Module
- The **`fs` (File System)** module in Node.js provides various methods to interact with the file system, such as reading, writing, appending, copying, and deleting files.
- The methods can be used in **synchronous** or **asynchronous** mode, where the synchronous methods block the execution of the code and return the result directly, while the asynchronous methods work with callbacks.

---

## Common File Handling Methods in the `fs` Module

### 1. **Writing to a File**

- **`fs.writeFile()`**: Asynchronously writes data to a file, replacing the file if it already exists.
- **`fs.writeFileSync()`**: Synchronously writes data to a file.

#### Example: Write to a file
```js
const fs = require('fs');

// Asynchronous version
fs.writeFile('example.txt', 'Hello, World!', (err) => {
  if (err) throw err;
  console.log('File has been written');
});

// Synchronous version
fs.writeFileSync('example.txt', 'Hello, World!');
console.log('File has been written');
