import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({course}) => {
    const {id, name} = course;
    return (
      <div className="my-5">
        <Link
          className="text-cyan-600 font-semibold"
          to={`/course/${id}`}
        >
          <span className='text-2xl'>•</span> {name}
        </Link>
      </div>
    );
};

export default Sidebar;