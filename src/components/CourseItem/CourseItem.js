import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseItem = ({course}) => {
    const {id, name, body, price, img, rating} = course;
    return (
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img className="h-60 w-full" src={img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            {body.slice(0, 150)} ...
          </p>
          <div className="flex justify-between mt-3">
            <div>
              <div>
                <h4 className="font-semibold">Price: ${price}</h4>
              </div>
              <div className="flex items-center">
                <FaStar className="mr-1 text-yellow-500"></FaStar>
                <h4>{rating} Rating</h4>
              </div>
            </div>
            <div>
              <Link to={`/course/${id}`}>
                <button className="btn btn-primary">Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CourseItem;