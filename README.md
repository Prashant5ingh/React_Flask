# React-Flask Application

A full-stack web application built with React frontend and Flask backend, containerized with Docker.

## Project Structure

```
React_Flask/
├── Frontend/                # React application built with Vite
│   ├── src/                # React source files
│   ├── public/             # Static files
│   ├── Dockerfile         # Frontend Docker configuration
│   └── ...                # Other frontend configuration files
├── Backend/                # Flask server application
│   ├── app.py             # Main Flask application
│   ├── Dockerfile         # Backend Docker configuration
│   └── requirements.txt   # Python dependencies
├── docker-compose.yml     # Docker Compose configuration
└── myVenv/               # Python virtual environment
```

## Technologies Used

### Frontend
- React.js
- Vite
- JavaScript/JSX
- CSS

### Backend
- Flask
- Flask-SQLAlchemy
- Flask-Cors
- Other Flask extensions

### DevOps
- Docker
- Docker Compose

## Prerequisites

- Docker and Docker Compose
- Node.js (for local frontend development)
- Python 3.8+ (for local backend development)

