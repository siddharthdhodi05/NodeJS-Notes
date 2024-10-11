# Node.js vs Browser JavaScript Engine (V8)

| **Feature**                   | **Node.js (V8 outside browser)**                        | **Browser JavaScript Engine (e.g., V8 in Chrome)** |
|-------------------------------|--------------------------------------------------------|---------------------------------------------------|
| **Global Object**              | `global` (in Node.js)                                  | `window` (in browsers)                            |
| **DOM Access**                 | Not available (Node.js does not have a DOM)            | Available (can manipulate HTML, CSS, etc.)        |
| **File System Access**         | Direct access to the file system (via `fs` module)      | No access (due to security sandboxing)            |
| **Network Requests**           | Built-in support for making raw network requests (HTTP, TCP) | Limited to browser APIs like `fetch`, WebSockets, XHR |
| **Encryption/Hashing**         | Supported via modules like `crypto` for encryption, hashing, etc. | Not available natively (must rely on libraries like WebCrypto) |
| **Module System**              | Uses CommonJS modules (via `require()`), supports ES6 modules (`import/export`) | ES6 modules (`import/export`)                     |
| **Event Loop**                 | Handles asynchronous operations, non-blocking I/O for file systems, networking, etc. | Manages events like user interactions, HTTP requests, DOM events |
| **Process Management**         | Can spawn child processes, handle OS-level tasks using `child_process` module | Cannot interact with OS-level processes           |
| **Operating System Interaction** | Can access system-level information (e.g., memory, CPU usage) via `os` module | No direct access to the operating system          |
| **External Libraries**         | Allows interaction with C++ libraries, especially for performance-sensitive tasks | Limited to JavaScript libraries and Web APIs      |
| **Web APIs (e.g., LocalStorage, Service Workers)** | Not available since Node.js is designed for backend/server-side use | Available for front-end/browser-based tasks       |

### Key Differences:
1. **Node.js lacks DOM-related functionality** since it's not intended for front-end or UI manipulations. It's used for backend/server tasks.
2. **Browser engines are sandboxed** for security, restricting access to file systems and processes, while Node.js has full access to the machine it's running on.
3. **Node.js provides built-in modules** (e.g., `crypto`, `fs`, `http`) to handle various tasks such as encryption, file handling, networking, and process management, which are unavailable in the browser context.

---

# NPM (Node Package Manager)

### What is NPM?
- **NPM (Node Package Manager)** is the default package manager for Node.js. It allows you to install, manage, and share libraries and dependencies in your Node.js project.
- It comes installed automatically when you install Node.js.

### Why is NPM Important?
- **Dependency Management**: NPM makes it easy to include external libraries (e.g., Express, Mongoose) and manage their versions in your project.
- **Scripts for Automation**: NPM allows you to define scripts for running tasks like testing, building, starting your application, or running linters.
- **Publishing Packages**: You can publish your own JavaScript libraries as NPM packages, allowing other developers to use your code in their projects.

### Key Features:
1. **Installing Packages**:
   - You can install packages globally or locally to your project. For example:
   ```bash
   npm install express --save
