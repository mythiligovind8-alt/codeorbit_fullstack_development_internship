# Notes Management REST API

## 1. Project Overview
The Notes Management REST API is a simple backend application developed using Node.js and Express.js.

It allows users to create, view, update, and delete notes through REST API endpoints.

## 2. Technologies Used
- Node.js
- Express.js
- JavaScript
- Postman

## 3. Data Storage
The notes are stored in an in-memory JavaScript array.

## 4. API Endpoints

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/notes` | Get all notes |
| POST | `/notes` | Add a new note |
| PUT | `/notes/:id` | Update an existing note |
| DELETE | `/notes/:id` | Delete a note |

## 5. How to Run the Project

1. Open the project folder in VS Code.
2. Open the terminal.
3. Install dependencies:

   `npm install`

4. Start the server:

   `node server.js`

5. The server runs at:

   `http://localhost:3000`

## 6. API Testing
All API endpoints were tested successfully using Postman.

## 7. Conclusion
This project helped me understand REST API development, HTTP methods, Express.js routing, and API testing using Postman.