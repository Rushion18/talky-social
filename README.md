# Talky Social Media Web App

Talky is a social media web app that combines the best features of Pinterest and Instagram, providing users with a platform to connect, share, and discover content.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Database Setup](#database-setup)
- [Docker Integration](#docker-integration)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Talky is a social media web app designed to facilitate user interactions through posts, comments, and likes. It incorporates elements of both Pinterest and Instagram, providing a visually engaging and user-friendly experience.

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
- **Database:** SQL Server (Azure)
- **Docker:** Containerization of backend and frontend
- **Tools:** Azure Data Studio, Postman

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/talky.git
   cd talky
   ```

2. **Set Up Database:**
   - Install and open Azure Data Studio.
   - Connect to your SQL Server on Azure.
   - Create a new database for Talky.

3. **Configure Backend:**
   - Initialize your Node.js project.
   - Install dependencies:
     ```bash
     npm install
     ```

4. **Connect Backend to Database:**
   - Update `server.js` with your Azure SQL Server connection details.

5. **Create API Endpoints:**
   - Define API routes in `server.js` for user actions, posts, and comments.

6. **Test with Postman:**
   - Use Postman to test your API endpoints.

7. **Run the Application Locally:**
   ```bash
   npm start
   ```

8. **Explore the App:**
   - Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Database Setup

Follow these steps to set up the Azure SQL Server database for Talky:

1. Open Azure Data Studio.
2. Connect to your SQL Server on Azure.
3. Create a new database named `talky`.

## Docker Integration

Talky is containerized using Docker for easy deployment and scalability. Follow these steps to build and run Docker containers:

1. **Build Backend Docker Image:**
   ```bash
   docker build -t talky-backend .
   ```

2. **Run Backend Docker Container:**
   ```bash
   docker run -p 3000:3000 -d talky-backend
   ```

3. **Build Frontend Docker Image:**
   ```bash
   docker build -t talky-frontend .
   ```

4. **Run Frontend Docker Container:**
   ```bash
   docker run -p 80:80 -d talky-frontend
   ```

## Contributing

We welcome contributions! If you have ideas for improvements, feature requests, or found a bug, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
```
