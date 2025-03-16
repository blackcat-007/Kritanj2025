"use client";
import React, { useState, useEffect,useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useSwipeable } from 'react-swipeable';
const events = [
  { id: 1, contestname: 'APT venture', poster: '/aptworkshop.jpg',instalink:'https://www.instagram.com/p/DG8j1tSyjw8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
  { id: 2, contestname: 'Robotics', poster: '/roboticsworkshop.jpg',instalink:'https://www.instagram.com/p/DGz63gaSghX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
  { id: 3, contestname: 'Management', poster: '/managementworkshop.jpg',instalink:'https://www.instagram.com/p/DG46a1qSQzl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
  { id: 4, contestname: 'Code War', poster: '/codingworkshop.jpg',instalink:'https://www.instagram.com/p/DGxuhHJSVAG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D' },
  { id: 5, contestname: 'Elektron Pro', poster: '/elektronproworkshop.jpg',instalink:'https://www.instagram.com/p/DGvtC6dSR8q/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D' },
  { id: 6, contestname: 'Civil Creation', poster: '/civilcreationworkshop.jpg',instalink:'https://www.instagram.com/p/DHAdkWPytKr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D' },
  { id: 7, contestname: 'Mech Tech ', poster: '/mechtechworkshop.jpg',instalink:'https://www.instagram.com/p/DG4_aj1yh7l/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D' },
  { id: 8, contestname: 'Elektron Lite', poster: '/elektronliteworkshop.jpg',instalink:'https://www.instagram.com/p/DG0P80oyvuY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D' },
  
];

const EventCard = ({ title, image }) => (
  <div className="md:w-80 w-40 sm:w-72 h-52 md:h-96 bg-black rounded-2xl shadow-lg overflow-hidden relative group">
    <img 
      src={image} 
      alt={title} 
      className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110" 
    />
    <div 
      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-xl h-auto text-black w-3/4 md:w-auto flex items-start md:items-center justify-between p-2 sm:p-4 shadow-md cursor-pointer"
      onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfruZFRAC35X3qbS8TRB6mDZEQIS_iVp2xdyro8Abf0ukI-OQ/viewform', '_blank')}
    >
      <h2 className="text-xs sm:text-sm md:text-lg md:font-semibold leading-tight md:leading-normal">
        {title}
      </h2>
      <span className="text-sm sm:text-xl md:text-2xl inline-block transition-transform duration-500 ease-in-out transform group-hover:rotate-90">
        <FontAwesomeIcon icon={faCircleUp} />
      </span>
    </div>
  </div>
);

export default function Event() {
 
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Add event listener for mouse wheel scrolling
    const handleWheelScroll = (event) => {
      event.preventDefault();
      
      const container = containerRef.current;
      if (!container) return;
    
      let targetScroll = container.scrollLeft + event.deltaY; // Target scroll position
      let currentScroll = container.scrollLeft; // Current position
    
      const smoothScroll = () => {
        currentScroll += (targetScroll - currentScroll) * 0.2; // Smooth transition factor
        container.scrollLeft = currentScroll;
    
        if (Math.abs(currentScroll - targetScroll) > 0.5) {
          requestAnimationFrame(smoothScroll); // Continue smooth transition
        }
      };
    
      requestAnimationFrame(smoothScroll);
    };
    

    container.addEventListener("wheel", handleWheelScroll);
    return () => container.removeEventListener("wheel", handleWheelScroll);
  }, []);

  // ✅ Handles both mouse and touch dragging
  const handleDragStart = (e) => {
    isDragging.current = true;
    const pageX = e.pageX || e.touches[0].pageX; // Support touch event
    startX.current = pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const handleDragMove = (e) => {
    if (!isDragging.current) return;
    
    const pageX = e.pageX || e.touches[0].pageX; // Support touch event
    const x = pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2; // Adjust scroll speed
  
    let targetScroll = scrollLeft.current - walk; // Target position
    let currentScroll = containerRef.current.scrollLeft; // Current position
  
    const smoothScroll = () => {
      if (!isDragging.current) return; // Stop if dragging ends
  
      currentScroll += (targetScroll - currentScroll) * 0.2; // Smooth transition
      containerRef.current.scrollLeft = currentScroll;
  
      if (Math.abs(currentScroll - targetScroll) > 0.5) {
        requestAnimationFrame(smoothScroll); // Continue animation
      }
    };
  
    requestAnimationFrame(smoothScroll);
  };
  
  const handleDragEnd = () => {
    isDragging.current = false;
  };

  return (
    <div className="p-4">
      <div className="w-auto text-left ml-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-white blinking-outline mb-4">
          Workshops
        </h1>
        <p className="text-gray-300">Learn. Build. Evolve. Excel.</p>
      </div>
      <div
        className="relative z-10 md:h-[38rem] h-[24rem] -mt-8 flex items-center justify-center space-x-2 md:space-x-4 overflow-visible p-2"
        style={{ filter: "drop-shadow(0 20px 30px rgba(128, 0, 128, 0.6))" }}
      >
        <div
          ref={containerRef}
          className="relative z-10 h-[24rem] md:h-[38rem] -mt-8 bg-black flex items-center justify-start space-x-4 overflow-x-scroll p-2 cursor-grab"
          style={{
            clipPath: "polygon(100% 11%, 100% 85%, 26% 100%, 0 91%, 0 12%)",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart} // ✅ Mobile touch support
          onTouchMove={handleDragMove} // ✅ Mobile touch support
          onTouchEnd={handleDragEnd} // ✅ Mobile touch support
        >
          <div className="flex items-center justify-start space-x-4">
            <div className="md:space-x-4 space-x-2 flex items-center justify-center">
            {events.map((event) => (
              <EventCard
                key={event.id}
                title={event.contestname}
                image={event.poster}
              />
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}