# Node.js Working and Architecture

### How Node.js Handles Requests

- **Node.js** uses an event-driven, non-blocking architecture, which makes it lightweight and efficient.
- It operates on a **single-threaded** event loop model, meaning that although Node.js itself runs on one thread, it can handle multiple requests simultaneously without being blocked.

---

### Key Components

1. **Event Loop**: 
   - The heart of Node.js. It constantly checks for events or requests in the **event queue**.
   - If the request is **non-blocking**, it processes the request and immediately sends back the response.

2. **Event Queue**:
   - This is where all incoming requests (like HTTP requests, database queries, file handling, etc.) are placed.
   - The event loop picks up requests from the event queue one by one.

3. **Thread Pool**:
   - Node.js uses the **libuv** library, which manages a thread pool.
   - When the event loop encounters a **blocking request** (e.g., file I/O or database operations), the request is passed to the thread pool.
   - A thread from the thread pool is assigned to handle that blocking task.

---

### How Requests Are Handled

1. **Non-blocking requests** (e.g., reading data from a cache, simple API response):
   - These requests are handled directly by the **event loop** without involving the thread pool.
   - Once the request is processed, the response is sent back immediately.
   
   ![Non-blocking request flow](./images/non_blocking_architecture.png)

2. **Blocking requests** (e.g., reading a file from disk or interacting with a database):
   - These requests require more time to process, so they are sent to the **thread pool**.
   - A thread from the pool is assigned to handle the task, and once the task is complete, the response is sent back to the event loop, which then sends the response to the client.

   ![Blocking request flow](./images/blocking_architecture.png)

---

### The Problem with Blocking Requests

- **Thread Pool Limit**: The thread pool has a limited number of threads (default is 4), so if all threads are busy handling blocking requests, any new blocking requests have to wait until a thread becomes available. This can lead to a bottleneck.
  
  - For example, if a Node.js server is handling multiple blocking requests (like reading large files or interacting with a slow database), all the threads in the thread pool might be occupied. In this case, any incoming request will be delayed, degrading performance.

- **Non-blocking requests** are better in scenarios where you want to handle multiple requests efficiently without getting blocked by long-running tasks.

### Why Non-blocking is Better
- **Non-blocking** operations allow Node.js to process more requests efficiently because the event loop is not waiting for blocking tasks to complete. It immediately moves on to the next request while the blocking task (if any) is handled by the thread pool.

