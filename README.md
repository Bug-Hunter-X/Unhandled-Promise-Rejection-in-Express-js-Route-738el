# Unhandled Promise Rejection in Express.js Route

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous route handlers.  Without proper error handling, these rejections can lead to application instability and unexpected behavior for the user.

## The Bug
The `bug.js` file contains an Express.js route that performs an asynchronous operation. However, it lacks a `catch` block to handle potential errors during the asynchronous operation. This results in a silent failure – the server doesn't crash, but the client receives no response and the error is logged only to the console.

## The Solution
The `bugSolution.js` file provides a corrected version of the route handler. It includes a `catch` block that handles potential errors and sends an appropriate error response to the client.  This prevents silent failures and provides better user experience.