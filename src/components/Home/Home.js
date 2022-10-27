import React from 'react';
import Hero from '../Hero/Hero';
import CourseInfo from './CourseInfo/CourseInfo';
import SkillBox from './SkillBox/SkillBox';

const Home = () => {
    return (
      <div>
        <Hero></Hero>
        <SkillBox></SkillBox>
        <CourseInfo></CourseInfo>
      </div>
    );
};

export default Home;