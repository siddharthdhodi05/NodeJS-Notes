# Node.js Modules and Modular Programming

### What is Modular Programming?
- **Modular programming** is a design technique that breaks down a large codebase into smaller, manageable, and reusable pieces called modules.
- Each module has its own specific functionality, making the code easier to maintain, test, and reuse.
- In Node.js, modules allow you to organize your application by splitting it into multiple files, each handling different functionalities.

### Modular Programming in Node.js
- Node.js follows a **module-based** architecture where each JavaScript file is treated as a module.
- Modules can be **exported** and **imported** using the built-in `require()` and `module.exports` functionalities.
  
### How to Create and Export Modules

In Node.js, you can create modules in two main ways:

1. **Using `module.exports`**  
2. **Using `exports.name`**

---

### 1. Exporting with `module.exports`

The `module.exports` object is the default object that a module returns when it's `require`d in another file. You can assign anything to `module.exports` (an object, function, or class).

#### Example: `math.js` (Module file)
```js
// math.js
module.exports = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
};

```
<hr/>

# Built-in Modules in Node.js
- Node.js comes with a set of **built-in modules** that provide core functionalities for tasks like file handling, networking, cryptography, and more.
- These modules are pre-installed and don't require any external libraries or installations, making them very efficient for performing common operations in a Node.js environment.
- Built-in modules can be imported using the `require()` function, just like user-defined modules.

---

## Commonly Used Built-in Modules

### 1. `fs` (File System)
- The **`fs` module** allows you to work with the file system. You can read, write, delete, and manage files or directories.
  
#### Example: Reading a File
```js
const fs = require('fs');

// Synchronously read a file
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);

// Asynchronously read a file
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

