"use client";
import React, { useState } from 'react';

import EventsComponent from '../../components/events_component';
import WorksjopComponent from '../../components/workshop_component';

import Collage from '../../components/collage';
import About from '../../components/about';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp, faCircleRight } from '@fortawesome/free-regular-svg-icons';

import { faArrowUp, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import FAQSection from '../../components/faq';

export default function Home() {


  return (
    <div className=" min-h-screen">
    

      <div className='flex items-center justify-center '>
        {/* Background Video */}
        <div className="fixed inset-0 z-0">
          <video autoPlay loop muted className="w-full h-full object-cover fixed blur-sm">
            <source src="/kritanjvideo.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Main Content */}
        <div className="z-10 mt-32 text-center shadow-lg p-6 h-full w-full rounded-lg">
          <div className="flex items-center justify-center mb-6">
            <img src="/kritanj_white.png" alt="Kritanj Logo" className="h-24 w-24 md:h-32 md:w-auto mr-4" />
            <img src="/kritanj-removedbg.png" alt="Fest Image" className="h-20 w-72 md:h-32 md:w-auto" />
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            The annual tech fest of Narula Institute of Technology. Featuring hackathons, coding contests, robotics challenges, civil creations, workshops, tech exhibitions, and many more!
          </p>
          
          
          <button 
  className="group px-6 py-2 mt-10 border-2 border-white text-white rounded-full transition duration-300 ease-in-out 
             hover:shadow-[0_0_20px_rgba(221,216,136,1),0_0_40px_rgba(221,216,136,0.8)] 
             hover:bg-gradient-to-r hover:from-[#8A63DA] hover:to-[#DDD888]"
  onClick={() => window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfruZFRAC35X3qbS8TRB6mDZEQIS_iVp2xdyro8Abf0ukI-OQ/viewform"}
>
  Register Now 
  <FontAwesomeIcon
    icon={faArrowUp}
    className="ml-2 transition-transform duration-500 ease-in-out transform group-hover:rotate-90"
  />
</button>

          
          {/* Marquee Section */}
          <div className="mt-40 py-2">
            <marquee behavior="scroll" direction="left"   scrollamount="10"  className="text-white text-2xl justify-between font-bold py-3 px-6 rounded-lg  bg-gradient-to-r from-[#1c515d] via-[#8A63DA] to-[#DDD888]">
              Kritanj – Experience the Future of Technology! Hack, Innovate, and Compete with the Best!
            </marquee>
          </div>

          <div className='z-10  bg-black h-full w-full'>
            <EventsComponent />
            <WorksjopComponent />
          </div>
          
          <Collage />
          <About />
          <FAQSection />
        </div>
      </div>
    </div>
  );
}
