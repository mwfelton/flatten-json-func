# flatten-json-func
A lightweight Node.js function that flattens nested JSON objects into a single-level structure with dot-separated keys. Designed for simplicity, flexibility, and deployment as a cloud function, this utility is ideal for transforming complex JSON structures into a more manageable format.

# Documentation
This repository contains a Node.js function, flattenJSON, which recursively flattens nested JSON objects. The function is exposed via an Express server, making it deployable as a cloud function. It includes both a functional endpoint and documentation endpoint.

# Endpoints
POST /functions/flattenJSON

Input: A nested JSON object provided in the input field of the request body.
Example:

{
  "input": {
    "a": {
      "b": {
        "c": 1
      }
    },
    "x": 2
  }
}

Output: A flattened JSON object with dot-separated keys.
Example:

{
  "output": {
    "a.b.c": 1,
    "x": 2
  }
}

# Getting Started

git clone https://github.com/your-username/flatten-json-function.git
cd flatten-json-function

Install Dependencies
npm install

Run Locally
node index.js

The server will start on http://localhost:3000.