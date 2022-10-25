import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData()
    console.log(course)
    return (
        <div>
            <h2>Course details</h2>
        </div>
    );
};

export default CourseDetails;