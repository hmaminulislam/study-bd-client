import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';


const Register = () => {

  const [error, setError] = useState(null)
  const { createUser, userProfileUpdate } = useContext(AuthContext);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  //Register form button handle
  const submitbtnHandle = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const photoUrl = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    setError('')
    //Strong password check
    if(password.length < 8) {
      return setError("Your password must be at least 8 characters");
    }
    if (!/^(?=.*[0-9]).*$/.test(password)) {
      return setError("Password must have at least one digit");
    }
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        userInfoUpdate(fullName, photoUrl);
        form.reset()
        toast.success("Register Successfull")
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message)
      });
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
      <div className="flex justify-center pt-8 dark:bg-black">
        <div className="card w-full max-w-sm shadow-2xl bg-zinc-100">
          {error && <p className='text-center font-semibold text-red-500 pt-3'>{error}</p>}
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