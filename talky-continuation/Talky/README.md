# Talky Social Media Web App

Talky is a social media web app designed for social interactions, post sharing, and content discovery. It incorporates features from popular platforms like Instagram and allows users to connect and engage in a visually appealing environment.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Database Schema](#database-schema)
- [Node.js Backend](#nodejs-backend)
- [API Endpoints](#api-endpoints)
- [Testing with Postman](#testing-with-postman)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Buana is a social media web app designed to provide users with a platform for sharing posts, interacting through likes and comments, and connecting with other users. It aims to create an engaging and user-friendly experience inspired by popular social media platforms.

## Features

- User authentication and account management
- Post creation with text or images
- Interaction through likes and comments
- Comment hierarchy with up to two levels
- User following system
- User profile pages displaying posts, followers, and following

## Technologies Used

- **Frontend:** Angular
- **Backend:** Node.js
- **Database:** SQL (MSSQL)
- **Tools:** Azure Data Studio, Postman

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/buana.git
   cd buana
   ```

2. **Set Up Database:**
   - Install and open Azure Data Studio.
   - Connect to your MSSQL server.
   - Create a new database for Buana.

3. **Configure Backend:**
   - Initialize your Node.js project.
   - Install dependencies:
     ```bash
     npm install
     ```

4. **Connect Backend to Database:**
   - Update `server.js` with your MSSQL connection details.

5. **Create API Endpoints:**
   - Define API routes in `server.js` for user actions, posts, and comments.

6. **Test with Postman:**
   - Use Postman to test your API endpoints.

7. **Run the Application:**
   ```bash
   npm start
   ```

8. **Explore the App:**
   - Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Database Schema

The database schema for Buana includes tables for users, posts, followers, and comments. Refer to the [Database Schema](#database-schema) section for details.

## Node.js Backend

Explore the [Node.js Backend](#nodejs-backend) section for information on setting up and configuring the backend server.

## API Endpoints

Refer to the [API Endpoints](#api-endpoints) section for details on available API routes.

## Testing with Postman

Use the [Testing with Postman](#testing-with-postman) section to test your API endpoints using Postman.

## Contributing

Contributions are welcome! If you have ideas, feature requests, or found a bug, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
