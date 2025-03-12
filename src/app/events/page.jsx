"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for app router
import { events } from './events';

export default function EventsPage() {
  const router = useRouter();

  const EventSection = ({ events }) => {
    const categories = [
      'All',
      'Coding',
      'Gaming',
      'Fun Events',
      'Civil Creation',
      'Mech Tech Events',
      'Robotics',
      'Hack-o-NiT',
      //'elektron',
      //'Management Events',
    ];

    const [activeCategory, setActiveCategory] = useState('All');

    const filteredEvents =
      activeCategory === 'All'
        ? events
        : events.filter((event) => event.category === activeCategory);

        const handleEventClick = (eventId) => {
          router.push(`/events/${eventId}`);
        };

    return (
      <div className="bg-[#0D0E13] text-white ">
   
      
      <div className="relative p-9 ">
        <div
          className="fixed inset-0 bg-cover bg-center blur-lg"
          style={{ backgroundImage: "url('/kritanjlogo.png')" }}
        ></div>
       
        <div className="relative z-10 md:p-10 p-4">
      
          <h1 className="text-4xl font-light mb-6 ">
            <p className="glowing-text">Events</p>
          </h1>
          <p className="text-[15px] font-light text-gray-400 mb-6">
            Explore. Compete. Innovate. Conquer.
          </p>

          <div className="space-y-6 border-t-2 border-b-2 border-white py-6">
            <div className="grid grid-cols-2 md:flex md:flex-wrap gap-4 mb-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 md:text-[20px] text-xs rounded-3xl border-2 text-white ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-[#051A47] to-[#77343C]'
                      : 'hover:bg-gradient-to-r hover:from-[#051A47] hover:to-[#77343C] bg-transparent'
                  } transition-all duration-200 ease-in-out`}
                >
                  {category}
                </button>
              ))}
            </div>

            {filteredEvents.map((event, index) => (
              <div
                key={index}
                className="p-1 rounded-lg bg-gradient-to-r from-[#051A47] to-[#77343C] cursor-pointer"
                onClick={() => handleEventClick(event.id)}
              >
               <div className="bg-[#141418] p-4 rounded-lg flex flex-col md:flex-row md:items-start gap-4">
  <img
    src={event.poster}
    alt={event.contestname}
    className="w-40 h-40 rounded-lg object-cover mx-auto md:ml-7"
  />
  <div className="flex-1 text-center md:text-left">
    <h2 className="text-xl font-semibold">{event.contestname}</h2>
    <p className="text-gray-400">{event.date}</p>
    <p className="text-gray-400">Team Size: {event.teamsize}</p>
  </div>
  <div className="md:self-start flex justify-center md:justify-start">
    <a
      href={
        event.contestname === "Hack-o-Nit"
          ? "https://docs.google.com/forms/d/e/1FAIpQLScicH5gboqHPdpyz1-hnD9K04ftNXtHumbAfqvwf67whbz9Ww/viewform?fbzx=-1065942362266758347"
          : "https://docs.google.com/forms/d/e/1FAIpQLSfruZFRAC35X3qbS8TRB6mDZEQIS_iVp2xdyro8Abf0ukI-OQ/viewform"
      }
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        className="mt-4 md:mt-0 gap-2 rounded-3xl border-[2px] w-[120px] h-[36px] flex justify-center items-center text-center text-[12px] border-white hover:border-0 hover:bg-gradient-to-r hover:from-[#051A47] hover:to-[#77343C] after:content-['>'] after:ml-2 hover:after:ml-3 transition-all duration-200 ease-in-out"
      >
        Register
      </button>
    </a>
  </div>
</div>

              </div>
            ))}
          </div>
       
        </div>
       
      </div>
      
    </div>
    );
  };

  return <EventSection events={events} />;
}
