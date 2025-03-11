"use client";
import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import EventsComponent from '../../components/events_component';
import WorksjopComponent from '../../components/workshop_component';
import Footer from '../../components/footer';
import Collage from '../../components/collage';
import About from '../../components/about';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp, faCircleRight } from '@fortawesome/free-regular-svg-icons';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-screen">
      <Navbar />

      <div className='flex items-center justify-center relative'>
        {/* Background Video */}
        <div className="fixed inset-0 z-0">
          <video autoPlay loop muted className="w-full h-full object-cover fixed blur-sm">
            <source src="/kritanjvideo.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Main Content */}
        <div className="z-10 mt-32 text-center shadow-lg p-6 h-full w-full rounded-lg">
          <div className="flex items-center justify-center mb-6">
            <img src="/kritanjlogo.png" alt="Kritanj Logo" className="h-20 w-20 md:h-32 md:w-auto mr-4" />
            <img src="/kritanj-removedbg.png" alt="Fest Image" className="h-20 w-72 md:h-32 md:w-auto" />
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            The annual tech fest of Narula Institute of Technology. Featuring hackathons, coding contests, robotics challenges, civil creations, workshops, tech exhibitions, and many more!
          </p>
          
          <button 
            className="px-6 py-2 mt-10 bg-purple-600 text-white rounded-full hover:bg-purple-800 transition"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Register Now 
            <FontAwesomeIcon
              icon={isHovered ? faCircleRight : faCircleUp}
              className="transition-transform duration-1000 ease-in ml-2"
            />
          </button>
          
          {/* Marquee Section */}
          <div className="mt-40 py-2">
            <marquee behavior="scroll" direction="left"   scrollamount="10"  className="text-white text-lg font-semibold py-3 px-6 rounded-lg  bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
              Kritanj – Experience the Future of Technology! Hack, Innovate, and Compete with the Best!
            </marquee>
          </div>

          <div className='z-10  bg-black h-full w-full'>
            <EventsComponent />
            <WorksjopComponent />
          </div>
          
          <Collage />
          <About />
          <Footer />
        </div>
      </div>
    </div>
  );
}
