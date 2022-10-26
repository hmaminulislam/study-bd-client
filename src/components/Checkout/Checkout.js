import React from 'react';
import { Navigate, useLoaderData } from 'react-router-dom';
import swal from "sweetalert";

const Checkout = () => {
    const course = useLoaderData();
    if(!course) {
      return <Navigate to='/error'></Navigate>
    }
    const { img, price, duration, name, lectures, instructorImg } = course;
    //order button click success message
    const orderBtnHandle = () => {
        swal("Good job!", "Your Order Done", "success");
    }
    return (
      <div className="lg:flex justify-between px-5 sm:px-10 md:px-20 mt-20">
        <div className="lg:w-9/12 w-full md:mr-12 sm:mr-2 mt-6 mb-10 lg:mb-0">
          <h2 className="text-4xl font-semibold mb-7 text-center text-sky-600">
            Proceed to Checkout
          </h2>
          <div className="card md:flex-row flex-col card-side bg-base-100 shadow-xl items-center">
            <img className="md:w-5/12 md:my-3 md:mx-5" src={img} alt="" />
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p className="text-gray-800 font-semibold">
                Access:{" "}
                <span className="text-sky-700 font-normal uppercase">
                  Life time
                </span>
              </p>
              <p className="text-gray-800 font-semibold">
                Leactures:{" "}
                <span className="text-sky-700 font-normal uppercase">
                  {lectures}
                </span>
              </p>
            </div>
            <div className="mr-5 text-sky-700 font-semibold flex md:flex-col pb-3 md:pb-0">
              <p className='mr-1 md:mr-0'>PRICE</p>
              <p>${price}</p>
            </div>
          </div>
        </div>
        <div className="lg:w-3/12 w-full">
          <img
            className="w-28 h-28 mx-auto rounded-full"
            src={instructorImg}
            alt=""
          />
          <h3 className="text-xl font-semibold text-sky-800 text-center mt-3">
            Instructor
          </h3>
          <div className="text-center border-y-2 border-gray-100 py-3 mt-4">
            <p className="text-gray-800 font-semibold">
              Duration:{" "}
              <span className="text-sky-700 uppercase">{duration}hour</span>
            </p>
          </div>
          <div className="text-center border-b-2 border-gray-100 py-3">
            <p className="text-gray-800 font-semibold">
              Total Price:{" "}
              <span className="text-sky-700 uppercase">${price}</span>
            </p>
          </div>
          <button onClick={orderBtnHandle} className="btn btn-primary w-full">Order Now</button>
        </div>
      </div>
    );
};

export default Checkout;