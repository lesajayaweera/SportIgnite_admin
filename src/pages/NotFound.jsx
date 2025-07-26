import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-center p-10 font-sans" >
      <div>
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-xl mb-2">Page Not Found</p>
        <p className="text-gray-600 mb-6">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link to="/" className="text-blue-600 hover:underline">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
