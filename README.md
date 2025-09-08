User Management API (Express.js)

This project is a simple User Management API built with Node.js and Express.js.
It demonstrates basic CRUD operations (Create, Read, Update, Delete) with middleware for logging and validation.

🚀 Features

Express.js server with JSON body parsing

Middleware to:

Log request method, URL, and response status

Validate request body for POST and PUT operations

CRUD Endpoints:

GET /users → Fetch all users

GET /users/:id → Fetch a user by ID

POST /user → Create a new user

PUT /user/:id → Update an existing user by ID

DELETE /user/:id → Delete a user by ID

📂 Project Structure
.
├── user.js   # Main application file
├── package.json
└── README.md

⚡ Installation & Setup

Clone the repository:

git clone https://github.com/Bhushannasre/Node.js-Assigment1.git
cd user-management-api


Install dependencies:

npm install


Run the server:

npm start


The API will be running at:

http://localhost:3000

🛠 Example Requests
Create User (POST /user)
{
  "firstName": "John",
  "lastName": "Doe",
  "hobby": "Reading"
}

Update User (PUT /user/:id)
{
  "hobby": "Coding"
}

Delete User (DELETE /user/:id)

Response:

{
  "message": "User deleted successfully"
}

✅ Technologies Used

Node.js

Express.js


