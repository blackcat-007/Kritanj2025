"use client";
import React, { useState, useEffect } from 'react';
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

const EventCard = ({ title, image,link }) => (
  <div className="w-full sm:w-72 h-52 md:h-96 bg-black rounded-2xl shadow-lg overflow-hidden relative group">
    <img  
      src={image} 
      alt={title} 
      className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110" 
    />

    <div 
      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-xl h-auto text-black w-3/4 md:w-auto flex items-start md:items-center justify-between p-2 sm:p-4 shadow-md cursor-pointer"
      onClick={() => window.open(link, '_blank')}
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
  const [index, setIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerSlide(window.innerWidth < 768 ? 2 : 4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true,
    delta: 10, 
    preventScrollOnSwipe: true,
  });

  const nextSlide = () => {
    if (index + cardsPerSlide < events.length) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="p-4">
      <div className='w-auto text-left ml-4'>
        <h1 className="text-3xl md:text-4xl font-semibold text-white blinking-outline mb-4">Workshops</h1>
        <p className="text-gray-300">Learn. Build. Evolve. Excel.</p>
      </div>
      <div 
        {...handlers}
        className="relative z-10 md:h-[38rem] h-[24rem] -mt-8 flex items-center justify-center space-x-2 md:space-x-4 overflow-visible p-2"
        style={{
          filter: 'drop-shadow(0 20px 30px rgba(128, 0, 128, 0.6))',
        }}
      >
        <div
          className="relative z-10 h-[24rem] md:h-[38rem] -mt-8 bg-black flex items-center justify-center space-x-2 md:space-x-4 overflow-hidden p-2"
          style={{
            clipPath: 'polygon(100% 11%, 100% 85%, 26% 100%, 0 91%, 0 12%)',
          }}
        >
          {index > 0 && (
            <button 
              onClick={prevSlide} 
              className="absolute w-12 h-12 left-0 md:left-2 top-1/2 -translate-y-[60%] p-1 md:p-2 text-center bg-[#732fc793] font-bold text-white rounded-full transition z-50"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          )}
          {events.slice(index, index + cardsPerSlide).map((event) => (
            <EventCard key={event.id} title={event.contestname} image={event.poster} link={event.instalink} />
          ))}
          {index + cardsPerSlide < events.length && (
            <button 
              onClick={nextSlide} 
              className="absolute w-12 h-12 right-2 md:right-4 top-1/2 -translate-y-[60%] p-1 md:p-2 text-center bg-[#732fc793] font-bold text-white rounded-full translate-x-2 md:translate-x-3 transition z-50"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
