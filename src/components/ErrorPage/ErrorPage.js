import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
      <div className="text-center mt-8">
        <span className="text-9xl">😞</span>
        <h4 className="text-5xl font-semibold mb-2 mt-7">Page Not Found</h4>
        <h2 className="text-9xl font-bold text-red-600 mb-5">404</h2>
        <Link to="/" className="btn btn-primary">
          <button>Back to Home</button>
        </Link>
      </div>
    );
};

export default ErrorPage;