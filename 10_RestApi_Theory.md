# REST API

## What is REST API?

**REST (Representational State Transfer)** is an architectural style for designing networked applications. It relies on a stateless, client-server communication protocol, typically HTTP. REST is often used to build APIs that allow client applications to interact with the server using standard HTTP methods (GET, POST, PUT, DELETE, etc.).

---

## Key Principles of REST API

1. **Client-Server Architecture**  
   REST follows the principle of a **client-server architecture**, meaning that the client (e.g., a browser or a mobile app) and the server should be treated as two separate entities. The client is responsible for making requests to the server, and the server is responsible for providing responses. This separation of concerns allows the client and server to evolve independently.

2. **HTTP Protocol and Methods**  
   REST APIs adhere to the **HTTP protocol**, using its methods to perform various operations. Each request sent by the client must respect the appropriate HTTP methods, which are:
   - `GET`: Retrieve data from the server
   - `POST`: Send data to the server to create a resource
   - `PUT`: Update an existing resource
   - `PATCH`: Partially update an existing resource
   - `DELETE`: Remove a resource from the server

---

## Example of a RESTful API Request

Consider an API that manages user accounts:

### GET Request

- GET /users/123
-This retrieves the details of a specific user with ID `123`.

### POST Request

- This creates a new user with the provided data.

---

## Conclusion

A REST API allows for clear separation between the client and server, and it uses standard HTTP methods to perform actions on resources. REST is stateless, meaning each API call contains all the necessary information for the server to fulfill the request, without relying on stored session data.


