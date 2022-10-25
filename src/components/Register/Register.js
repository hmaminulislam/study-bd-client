import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
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
                <span>Have an account? </span>
                <Link to="/login" className="text-emerald-600 font-semibold">
                  Please Login
                </Link>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Register;