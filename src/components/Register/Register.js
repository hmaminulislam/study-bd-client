import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';


const Register = () => {
  const { createUser, userProfileUpdate } = useContext(AuthContext);
  //Register form button handle
  const submitbtnHandle = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const photoUrl = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        userInfoUpdate(fullName, photoUrl);
      })
      .catch((error) => console.error(error));
  }
  // User Full name and PhotoURL update
  const userInfoUpdate = (fullName, photoUrl) => {
    const profile = {
      displayName: fullName,
      photoURL: photoUrl,
    }
    userProfileUpdate(profile)
  }
    return (
      <div className="flex justify-center pt-8">
        <div className="card w-full max-w-sm shadow-2xl bg-zinc-100">
          <form onSubmit={submitbtnHandle} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                name='fullName'
                type="text"
                placeholder="full name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                name='photoURL'
                type="text"
                placeholder="photo url"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name='email'
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name='password'
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <div className="text-center mt-2">
                <span>Have an account? </span>
                <Link to="/login" className="text-emerald-600 font-semibold">
                  Please Login
                </Link>
              </div>
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Register;