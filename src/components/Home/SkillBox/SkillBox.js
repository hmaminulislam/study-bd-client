import React from 'react';
import { FaBookReader, FaGraduationCap, FaPeopleArrows } from "react-icons/fa";

const SkillBox = () => {
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 px-5 sm:px-10 md:px-20 py-12 dark:bg-black">
          <div className="border border-gray-200 dark:border-gray-500 text-center py-5 px-4">
            <FaBookReader className="text-5xl text-sky-500 mx-auto"></FaBookReader>
            <h2 className="text-xl text-sky-700 mt-4 font-semibold">
              Learn new skills
            </h2>
            <p className="text-normal text-gray-500 mt-2">
              With flexible courses
            </p>
          </div>
          <div className="border border-gray-200 dark:border-gray-500 text-center py-5 px-4">
            <FaPeopleArrows className="text-5xl text-sky-500 mx-auto"></FaPeopleArrows>
            <h2 className="text-xl text-sky-700 mt-4 font-semibold">
              Expert Teacher
            </h2>
            <p className="text-normal text-gray-500 mt-2">
              Upskill with Speacilist
            </p>
          </div>
          <div className="border border-gray-200 dark:border-gray-500 text-center py-5 px-4">
            <FaGraduationCap className="text-5xl text-sky-500 mx-auto"></FaGraduationCap>
            <h2 className="text-xl text-sky-700 mt-4 font-semibold">
              Online Degrees
            </h2>
            <p className="text-normal text-gray-500 mt-2">
              Study flexibly online
            </p>
          </div>
        </div>
    );
};

export default SkillBox;