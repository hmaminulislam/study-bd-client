import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../assets/img/HERO33.png'

const CourseInfo = () => {
    return (
      <div className="lg:flex justify-center items-center px-5 sm:px-10 md:px-20 py-14 dark:bg-black">
        <div className="lg:mr-28 mr-0">
          <img className="mx-auto course-info-img" src={Image} alt="" />
        </div>
        <div className="lg:w-2/6 w-full mt-20 lg:mt-0">
          <button className="btn bg-red-500 border-0 rounded hover:bg-red-600 mb-8">
            $69.99 /month
          </button>
          <h2 className="text-4xl text-sky-700 font-bold">
            Access to all 100+ online courses
          </h2>
          <div className="mt-5 mb-6">
            <p className="text-xl font-normal mb-3 text-sky-900">
              ✔ Get unlimited access to 4,000+ of our top courses
            </p>
            <p className="text-xl font-normal mb-3 text-sky-900">
              ✔ Explore a variety of fresh topics
            </p>
            <p className="text-xl font-normal mb-3 text-sky-900">
              ✔ Find the right instructor for you
            </p>
            <p className="text-xl font-normal mb-3 text-sky-900">
              ✔ Best course selling
            </p>
          </div>
          <Link to="/courses" className='text-red-500 underline font-semibold'>Get Started Now</Link>
        </div>
      </div>
    );
};

export default CourseInfo;