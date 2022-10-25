import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
      <div className="flex justify-center pt-10">
        <div className="card w-full max-w-sm shadow-2xl bg-zinc-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <div className="text-center mt-2">
                <span>Don't have an account? </span>
                <Link to="/register" className="text-emerald-600 font-semibold">
                  Please Register
                </Link>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="flex justify-center mb-8">
            <button className="mr-4">
              <FaGoogle className="text-3xl text-green-500"></FaGoogle>
            </button>
            <button>
              <FaGithub className="text-3xl text-gray-800"></FaGithub>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Login;