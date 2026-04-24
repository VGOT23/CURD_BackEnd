# Experiment 10 - Student CRUD Backend

A complete beginner-friendly CRUD backend built with **Node.js**, **Express.js**, and **MongoDB**.

This project provides APIs to:
- Create a student
- Get all students
- Get a single student by ID
- Update a student by ID
- Delete a student by ID

---

## Tech Stack

- Node.js
- Express.js
- MongoDB (with Mongoose)
- CORS
- Nodemon

---

## Project Structure

```text
experiment10/
├── server.js
├── models/
│   └── Student.js
├── routes/
│   └── studentRoutes.js
├── package.json
└── README.md
```

---

## Prerequisites

Before running this project, make sure you have:

1. **Node.js** installed (v16+ recommended)
2. **MongoDB** installed and running locally
3. A tool for API testing (Postman, Thunder Client, or curl)

---

## Installation and Setup

### 1) Go to project directory

```bash
cd "d:\full stack II\CURD_Backend_wth_database\experiment10"
```

### 2) Install dependencies

```bash
npm install
```

### 3) Start MongoDB

Make sure MongoDB is running on:

`mongodb://127.0.0.1:27017/collegeDB`

### 4) Run the server

Development mode (with auto-restart):

```bash
npm run dev
```

Production mode:

```bash
npm start
```

Server runs on:

`http://localhost:5000`

---

## NPM Scripts

From `package.json`:

- `npm start` -> Runs `node server.js`
- `npm run dev` -> Runs `nodemon server.js`

---

## Database Configuration

In `server.js`, MongoDB connection is:

```js
mongoose.connect("mongodb://127.0.0.1:27017/collegeDB")
```

On successful connection, terminal shows:

`Database Connected`

---

## API Base URL

`http://localhost:5000/api/students`

---

## API Endpoints

### 1) Create Student

- **Method:** `POST`
- **URL:** `/api/students`
- **Body (JSON):**

```json
{
  "name": "Rahul Sharma",
  "email": "rahul@example.com",
  "course": "Node.js"
}
```

**Success Response (201):**

```json
{
  "success": true,
  "message": "Student created successfully",
  "data": {
    "_id": "661111111111111111111111",
    "name": "Rahul Sharma",
    "email": "rahul@example.com",
    "course": "Node.js",
    "createdAt": "2026-04-24T12:00:00.000Z",
    "updatedAt": "2026-04-24T12:00:00.000Z",
    "__v": 0
  }
}
```

---

### 2) Get All Students

- **Method:** `GET`
- **URL:** `/api/students`

**Success Response (200):**

```json
{
  "success": true,
  "message": "Students fetched successfully",
  "data": [
    {
      "_id": "661111111111111111111111",
      "name": "Rahul Sharma",
      "email": "rahul@example.com",
      "course": "Node.js",
      "createdAt": "2026-04-24T12:00:00.000Z",
      "updatedAt": "2026-04-24T12:00:00.000Z",
      "__v": 0
    }
  ]
}
```

---

### 3) Get Single Student

- **Method:** `GET`
- **URL:** `/api/students/:id`

Example:

`/api/students/661111111111111111111111`

**Success Response (200):**

```json
{
  "success": true,
  "message": "Student fetched successfully",
  "data": {
    "_id": "661111111111111111111111",
    "name": "Rahul Sharma",
    "email": "rahul@example.com",
    "course": "Node.js",
    "createdAt": "2026-04-24T12:00:00.000Z",
    "updatedAt": "2026-04-24T12:00:00.000Z",
    "__v": 0
  }
}
```

**Not Found Response (404):**

```json
{
  "success": false,
  "message": "Student not found"
}
```

---

### 4) Update Student

- **Method:** `PUT`
- **URL:** `/api/students/:id`
- **Body (JSON):**

```json
{
  "name": "Rahul Verma",
  "email": "rahul.verma@example.com",
  "course": "MERN Stack"
}
```

**Success Response (200):**

```json
{
  "success": true,
  "message": "Student updated successfully",
  "data": {
    "_id": "661111111111111111111111",
    "name": "Rahul Verma",
    "email": "rahul.verma@example.com",
    "course": "MERN Stack",
    "createdAt": "2026-04-24T12:00:00.000Z",
    "updatedAt": "2026-04-24T12:05:00.000Z",
    "__v": 0
  }
}
```

---

### 5) Delete Student

- **Method:** `DELETE`
- **URL:** `/api/students/:id`

**Success Response (200):**

```json
{
  "success": true,
  "message": "Student deleted successfully"
}
```

---

## Postman Testing Flow (Recommended)

Use this order to test quickly:

1. **POST** `/api/students` -> create a student
2. Copy returned `_id`
3. **GET** `/api/students` -> verify list
4. **GET** `/api/students/:id` -> verify single student
5. **PUT** `/api/students/:id` -> update details
6. **DELETE** `/api/students/:id` -> remove student
7. **GET** `/api/students/:id` -> should return 404

---

## Common Errors and Fixes

### 1) MongoDB not connected

If you see connection error:
- Ensure MongoDB service is running
- Confirm URL is exactly `mongodb://127.0.0.1:27017/collegeDB`

### 2) Validation errors on POST/PUT

All three fields are required:
- `name`
- `email`
- `course`

Send valid JSON body and set `Content-Type: application/json`.

### 3) Invalid ObjectId in URL

For `/api/students/:id`, use a valid MongoDB ObjectId (24 hex chars).

---

## Learning Notes

This project demonstrates:
- Express routing and middleware
- Mongoose models and schema design
- Async/await with try-catch error handling
- RESTful API design for CRUD operations

---

## Author

Experiment 10 backend project for CRUD practice with Node.js + MongoDB.
