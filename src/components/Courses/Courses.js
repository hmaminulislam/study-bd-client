import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseItem from '../CourseItem/CourseItem';
import Sidebar from '../Sidebar/Sidebar';

const Courses = () => {
    const courses = useLoaderData()
    return (
      <div className="md:flex px-5 md:px-20 sm:px-10 mt-12">
        <div className="lg:w-1/4 md:w-2/4 w-full">
          <div className="md:sticky md:top-10 text-center md:text-start">
            <h2 className='text-2xl font-semibold'>Latest Courses</h2>
            {
                courses.map(course => <Sidebar key={course.id} course={course}></Sidebar>)
            }
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 w-96 lg:w-full mx-auto">
          {courses.map((course) => (
            <CourseItem key={course.id} course={course}></CourseItem>
          ))}
        </div>
      </div>
    );
};

export default Courses;