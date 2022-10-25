import React from 'react';
import { FaBell, FaBuromobelexperte, FaClock, FaStar, FaUsers } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData()
    const {
      name,
      img,
      price,
      duration,
      students,
      lectures,
      quizzes,
      rating,
      body,
      instructorImg,
    } = course;
    console.log(course)
    return (
      <div className="md:flex flex-row justify-between px-5 sm:px-10 md:px-20 mt-10">
        <div className="md:w-9/12 w-full mr-8">
          <h2 className="text-4xl font-semibold">{name}</h2>
          <img className="w-full mt-10" src={img} alt="" />
          <h3 className="text-3xl font-semibold mt-5 mb-3">
            About this course
          </h3>
          <p className="text-justify">{body}</p>
        </div>
        <div className="md:w-3/12 w-full md:mt-20 mt-14">
          <div>
            <button className="btn btn-primary">Download PDF</button>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-5 md:mt-10 mt-16">
              Course Features
            </h3>
            <img
              className="w-40 h-40 mx-auto rounded-full mt-5"
              src={instructorImg}
              alt=""
            />
            <div className="flex items-center justify-between border-b-2 border-zinc-100 px-3 py-3 mt-5">
              <div className="flex items-center">
                <FaClock className="text-cyan-700 mr-2"></FaClock>
                <h4 className="font-semibold"> Duration</h4>
              </div>
              <h4 className="font-semibold">{duration}</h4>
            </div>
            <div className="flex items-center justify-between border-b-2 border-gray-100 px-3 py-3">
              <div className="flex items-center">
                <FaBell className="text-cyan-700 mr-2"></FaBell>
                <h4 className="font-semibold"> Leactures</h4>
              </div>
              <h4 className="font-semibold">{lectures}</h4>
            </div>
            <div className="flex items-center justify-between border-b-2 border-gray-100 px-3 py-3">
              <div className="flex items-center">
                <FaBuromobelexperte className="text-cyan-700 mr-2"></FaBuromobelexperte>
                <h4 className="font-semibold"> Quizzes</h4>
              </div>
              <h4 className="font-semibold">{quizzes}</h4>
            </div>
            <div className="flex items-center justify-between border-b-2 border-gray-100 px-3 py-3">
              <div className="flex items-center">
                <FaUsers className="text-cyan-700 mr-2"></FaUsers>
                <h4 className="font-semibold"> Students</h4>
              </div>
              <h4 className="font-semibold">{students}</h4>
            </div>
            <div className="flex items-center justify-between border-b-2 border-gray-100 px-3 py-3">
              <div className="flex items-center">
                <FaStar className="text-cyan-700 mr-2"></FaStar>
                <h4 className="font-semibold"> Rating</h4>
              </div>
              <h4 className="font-semibold">{rating}</h4>
            </div>
          </div>
          <div className='mt-5'>
            <h3 className="text-xl font-semibold text-red-500">Price: ${price}</h3>
            <button className='btn btn-primary w-full mt-8'>BUY NOW</button>
          </div>
        </div>
      </div>
    );
};

export default CourseDetails;