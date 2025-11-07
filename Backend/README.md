# Flask Backend

This is the backend server for the React-Flask application. It's built using Flask, a lightweight WSGI web application framework in Python.

## Technologies Used

- Flask
- Flask-SQLAlchemy
- Flask-Cors
- Flask-SocketIO
- Flask-Login
- Flask-Migrate
- Flask-WTF
- Flask-Bcrypt

## Setup and Installation

1. Make sure you have Python installed on your system
2. Create a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use: .\venv\Scripts\activate
   ```

3. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Running the Application

1. Activate the virtual environment if you haven't already:
   ```bash
   .\venv\Scripts\activate  # On Windows
   ```

2. Start the Flask server:
   ```bash
   python app.py
   ```

The server will start running on `http://localhost:5000` by default.

## Docker Support

The application includes Docker support. To build and run using Docker:

```bash
docker build -t flask-backend .
docker run -p 5000:5000 flask-backend
```

## Project Structure

```
Backend/
├── app.py              # Main application entry point
├── Dockerfile          # Docker configuration
└── requirements.txt    # Python dependencies
```

## Environment Variables

Create a `.env` file in the backend directory with the following variables:
- `FLASK_APP=app.py`
- `FLASK_ENV=development`
- `SECRET_KEY=your_secret_key`

## API Documentation

Document your API endpoints here.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request