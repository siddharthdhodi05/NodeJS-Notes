# Middleware in Express.js

## What is Middleware?

Middleware functions in Express.js are functions that have access to the following objects in the application's **request-response cycle**:

- **Request object (`req`)**: Contains data about the HTTP request.
- **Response object (`res`)**: Used to send a response back to the client.
- **Next middleware function (`next`)**: A function that passes control to the next middleware in the stack. The next middleware is commonly referred to as `next`.

Middleware functions can be used for a variety of tasks in the request-response cycle:

1. Execute any kind of code.
2. Modify the request (`req`) and response (`res`) objects.
3. End the request-response cycle.
4. Call the next middleware function to continue processing the request.

---

## Example of a Middleware Function

Here is an example of a simple middleware function in Express:

```js
const express = require('express');
const app = express();

// Custom Middleware function
app.use((req, res, next) => {
  console.log('Middleware function executed!');
  req.customProperty = "Hello, I'm a middleware property!";
  next(); // Pass control to the next middleware
});

// Route to handle the request
app.get('/', (req, res) => {
  res.send(`Middleware added this: ${req.customProperty}`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```
---

## Explanation:
- app.use(): This is where the middleware function is defined. It logs a message and adds a custom property to the request object (req.customProperty = ...).

- next(): Calling next() ensures that the next middleware or route handler is executed. Without next(), the request would hang and never proceed.

- Modifying the Request Object: In this case, the middleware modifies the request    object by adding a custom property, which is then accessed in the route handler.

---
## Types of Middleware in Express.js

### 1. Application-Level Middleware

This middleware is bound to the `app` object using `app.use()` or `app.METHOD()`. It runs for every incoming request to the app or can be restricted to specific routes.

#### Example:
```js
const express = require('express');
const app = express();

// Application-level middleware
app.use((req, res, next) => {
  console.log('Application-Level Middleware');
  next();
});

// Route
app.get('/', (req, res) => {
  res.send('Hello from the Home Route!');
});

app.listen(3000);
```
---

### 2. Router-Level Middleware

This middleware works similarly to application-level middleware but is bound to an instance of express.Router(), meaning it only applies to a specific router's routes.

```js
const express = require('express');
const app = express();
const router = express.Router();

// Router-level middleware
router.use((req, res, next) => {
  console.log('Router-Level Middleware');
  next();
});

// Route attached to the router
router.get('/user', (req, res) => {
  res.send('User Page');
});

app.use('/api', router); // Attach router to `/api` path

app.listen(3000);

```
---

### 3. Built-in Middleware
#### Express provides built-in middleware functions for common tasks, such as serving static files or parsing JSON bodies in requests.

#### Common Built-in Middleware: 
- express.static(): Serves static files like images, CSS files, and JavaScript files.

```js
app.use(express.static('public'));
```
- express.json(): Parses incoming requests with JSON payloads.

```js
app.use(express.json());

```
- express.urlencoded(): Parses URL-encoded data sent with HTTP requests.

```js
app.use(express.urlencoded({ extended: true }));

```

### 4. Third-Party Middleware
- These are external middleware functions installed via npm and integrated into your Express application to add new functionalities.

```js
const express = require('express');
const morgan = require('morgan');
const app = express();

// Third-party middleware (Morgan for logging)
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000);


```

---

### 5. Error-Handling Middleware
- Error-handling middleware is used to catch and handle errors during the request-response cycle. It has four arguments: err, req, res, and next.

```js

const express = require('express');
const app = express();

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000);

```