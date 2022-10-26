import React from 'react';
import { Link } from 'react-router-dom';
import ErrorImg from '../../assets/img/error.png'

const ErrorPage = () => {
    return (
      <div className="text-center mt-8">
        <img className='mx-auto' style={{maxWidth: '200px'}} src={ErrorImg} alt="" />
        <h4 className="md:text-5xl text-3xl font-semibold mb-2 mt-7">Page Not Found</h4>
        <h2 className="md:text-9xl text-5xl font-bold text-red-600 mb-5">404</h2>
        <Link to="/" className="btn btn-primary">
          <button>Back to Home</button>
        </Link>
      </div>
    );
};

export default ErrorPage;