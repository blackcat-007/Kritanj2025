"use client";
import React, { useState, useEffect } from 'react';

const events = [
  { id: 1, title: 'Coding', image: '/coding.jpg' },
  { id: 2, title: 'Robotics', image: '/robotics.jpg' },
  { id: 3, title: 'Games', image: '/games.jpg' },
  { id: 4, title: 'Hack-O-NiT', image: '/hackonit.jpg' },
  { id: 5, title: 'Workshops', image: '/workshop.jpg' }
];

const EventCard = ({ title, image }) => (
  <div className="w-72 h-96 bg-black rounded-2xl shadow-lg overflow-hidden relative">
    <img src={image} alt={title} className="w-full h-full object-cover" />
    <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl text-black flex items-center justify-between p-3 shadow-md">
      <h2 className="text-lg font-semibold">{title}</h2>
      <span className="text-xl">➜</span>
    </div>
  </div>
);

export default function Workshop() {
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
        <h1 className="text-3xl md:text-4xl font-bold text-white  blinking-outline mb-4">Workshop</h1>
        <p className="text-gray-300">Learn. Build. Evolve. Excel.</p>
      </div>
      <div className="relative z-10 h-[38rem] -mt-8 flex items-center justify-center space-x-4 overflow-visible p-2"
        style={{
          filter: 'drop-shadow(0 20px 30px rgba(128, 0, 128, 0.6))',
        }}>
        <div
          className="relative z-10 h-[38rem] -mt-8 bg-black flex items-center justify-center space-x-4 overflow-hidden p-2"
          style={{
            clipPath: 'polygon(100% 11%, 100% 85%, 26% 100%, 0 91%, 0 12%)',
          }}
        >
          {index > 0 && (
            <button 
              onClick={prevSlide} 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-purple-600 text-white rounded-full hover:bg-purple-800 transition z-20"
            >
              ←
            </button>
          )}
          
          {events.slice(index, index + cardsPerSlide).map((event) => (
            <EventCard key={event.id} title={event.title} image={event.image} />
          ))}
          
          {index + cardsPerSlide < events.length && (
            <button 
              onClick={nextSlide} 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-purple-600 text-white rounded-full hover:bg-purple-800 transition z-20"
            >
              →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
