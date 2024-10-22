# Model-View-Controller (MVC) in Node.js

## What is MVC?

**MVC (Model-View-Controller)** is a design pattern used for developing web applications. It separates an application into three interconnected components:
- **Model**: Represents the data and the logic behind it.
- **View**: Responsible for the presentation layer (the UI).
- **Controller**: Acts as an intermediary between Model and View, handling user input and communication between them.

This separation of concerns makes applications more modular, easier to maintain, and scalable.

---

## How MVC Works in Node.js

1. **Model**:
   - The Model represents the data layer of the application.
   - It interacts with the database and defines the data structure, usually by using an ORM (like Mongoose for MongoDB).
   - It encapsulates the application’s data and business logic.

2. **View**:
   - The View is the presentation layer.
   - It displays the data to the user, usually rendered through templates like **EJS**, **Pug**, or **Handlebars**.
   - The View only concerns itself with how data is presented, not where it comes from.

3. **Controller**:
   - The Controller handles the user input and requests.
   - It processes the requests by interacting with the Model, then selects the appropriate View to render the response.
   - It acts as the bridge between the Model and View.

---

## MVC Workflow Example in Node.js

1. **Client Request**: A user sends a request (e.g., clicking a button or submitting a form).
2. **Controller**: The request hits the controller, which processes the data or fetches necessary information from the Model.
3. **Model**: The controller fetches or manipulates data using the Model (e.g., querying a database).
4. **View**: Once the data is ready, the Controller passes it to the View for rendering.
5. **Client Response**: The View sends a response (HTML, JSON, etc.) to the client.

---

### Example of an MVC Setup in Node.js


---

### 1. **Model** (models/userModel.js):
This handles the data, typically interacting with a database (e.g., MongoDB with Mongoose).
```js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model('User', userSchema);
module.exports = User;
```
### 2. **View** (views/userView.ejs):

This handles the presentation layer. The data from the controller is rendered here.:

```html
<!DOCTYPE html>
<html>
<head>
  <title>User List</title>
</head>
<body>
  <h1>Users</h1>
  <ul>
    <% users.forEach(function(user) { %>
      <li><%= user.name %> (<%= user.email %>)</li>
    <% }); %>
  </ul>
</body>
</html>
```

### 3. **Controller** (controllers/userController.js):
This is where the business logic is processed. It handles requests and responses.
```js
const User = require('../models/userModel');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();  // Fetch users from the database
    res.render('userView', { users });  // Pass users to the view
  } catch (err) {
    res.status(500).send('Error fetching users');
  }
};
```

### 4. **Routes** (routes.js):
This defines routes that map URLs to specific controller functions.
```js
const express = require('express');
const userController = require('./controllers/userController');
const router = express.Router();

// Define the route for displaying users
router.get('/users', userController.getUsers);

module.exports = router;
```

### 5. Main App (app.js):
This is the main entry point where the application is set up.

```js
const express = require('express');
const app = express();
const userRoutes = require('./routes');

app.set('view engine', 'ejs');  // Set EJS as the templating engine

app.use('/', userRoutes);  // Use the routes

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```
---

## Benefits of MVC Architecture.

- **Separation:** of Concerns: Each component (Model, View, Controller) has its own distinct responsibility, making the codebase modular and easier to manage.
- **Scalability:** It becomes easier to scale the application by adding more functionality to each component without affecting the others.
- **Reusability:** The same logic (Model, Controller) can be reused with different views.
- **Maintainability:** Since the code is well-organized, it becomes easier to maintain and debug.