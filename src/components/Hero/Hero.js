import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css'

const Hero = () => {
    return (
      <div className="hero min-h-screen">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 sm:text-5xl text-4xl font-bold hero-title">
              Skill Development Platform
            </h1>
            <p className="mb-5">
              Start streaming on-demand video lectures today from top level
              instructors Attention heatmaps.
            </p>
            <Link to='courses'>
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Hero;