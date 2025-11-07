# React Frontend

This is the frontend application built with React and Vite for the React-Flask application.

## Technologies Used

- React
- Vite
- JavaScript/JSX
- CSS

## Prerequisites

- Node.js (>= 14.x)
- npm or yarn

## Setup and Installation

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

2. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

The application will be available at `http://localhost:5173` by default.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## Project Structure

```
Frontend/
├── public/            # Public assets
├── src/               # Source files
│   ├── assets/        # Static assets
│   ├── App.jsx        # Main App component
│   ├── App.css        # App styles
│   ├── main.jsx       # Entry point
│   ├── index.css      # Global styles
│   └── Service.js     # API service functions
├── index.html         # HTML template
├── package.json       # Project dependencies and scripts
├── vite.config.js     # Vite configuration
└── eslint.config.js   # ESLint configuration
```

## Docker Support

The application includes Docker support. To build and run using Docker:

```bash
docker build -t react-frontend .
docker run -p 5173:5173 react-frontend
```

## Environment Variables

Create a `.env` file in the frontend directory with your environment variables:
- `VITE_API_URL=http://localhost:5000` # Backend API URL

## Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
