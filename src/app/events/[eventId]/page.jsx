"use client";
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp, faCircleRight } from '@fortawesome/free-regular-svg-icons';

import { events } from '../events';


const EventDetailPage = () => {
    const { eventId } = useParams();
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    const eventDetails = events.find((event) => event.id === Number(eventId));

    if (!eventDetails) {
        return (
            <div className="min-h-screen bg-[#0D0E13] text-white p-6">
                <h1 className="text-3xl font-bold">Event Not Found</h1>
                <p className="text-gray-400">Please check the event ID and try again.</p>
            </div>
        );
    }

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };

    // Countdown timer logic
    useEffect(() => {
        if (eventDetails.date) {
            const eventDate = new Date(eventDetails.date).getTime();

            const updateCountdown = () => {
                const now = new Date().getTime();
                const distance = eventDate - now;

                if (distance > 0) {
                    setTimeLeft({
                        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                        seconds: Math.floor((distance % (1000 * 60)) / 1000),
                    });
                }
            };

            const timer = setInterval(updateCountdown, 1000);
            return () => clearInterval(timer);
        }
    }, [eventDetails.date]);

    return (
        <div className="min-h-screen md:mt-0 mt-16 bg-[#0D0E13] text-white p-0">
        <div className="relative w-full h-full ">
        {eventDetails.bg1 && (
  <div className="hackbg1 w-full h-auto">
    <img src={eventDetails.bg1} alt="Background 1" className="w-full h-auto  object-cover" />
  </div>
)}

{eventDetails.bg2 && (
  <div className="hackbg2 w-full h-auto">
    <img src={eventDetails.bg2} alt="Background 2" className="w-full h-auto   object-cover" />
  </div>
)}

{eventDetails.bg3 && (
  <div className="hackbg3 w-full h-auto">
    <img src={eventDetails.bg3} alt="Background 3" className="w-full h-auto    object-cover" />
  </div>
)}
        </div>
    
        <div className='relative p-6 lg:p-20'>
            {isFullScreen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" 
                    onClick={toggleFullScreen}
                >
                    <img 
                        src={eventDetails.poster} 
                        alt="Event Poster" 
                        className="max-w-full max-h-full cursor-pointer"
                    />
                </div>
            )}
    
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                    {eventDetails.contestname && (
                        <h1 className="text-3xl md:text-4xl glowing-text font-bold">{eventDetails.contestname}</h1>
                    )}
                    <img 
                        src={eventDetails.poster} 
                        alt="Event Poster" 
                        className="w-full h-auto rounded-lg cursor-pointer"
                        onClick={toggleFullScreen}
                    />
                    <div className="space-y-3">
                        {eventDetails.date && <p className="text-gray-300">📅 {eventDetails.date}</p>}
                        {eventDetails.date && (
                            <div className="text-lg text-purple-500 font-semibold">
                                ⏳ Countdown: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                            </div>
                        )}
                        {eventDetails.teamsize && <p className="text-gray-300">👥 Team Size: {eventDetails.teamsize}</p>}
                        {eventDetails.prizemoney && 
                        <div className='hackprize'>
                            <div className='prize'>Prize Money</div>
                            {eventDetails.prizemoney[0] && <p className=" gold">🏆 Winner: {eventDetails.prizemoney[0]}</p>}
                            {eventDetails.prizemoney[1] && <p className="text-[#eee7e7fd]">🏆 1st RunnerUp: {eventDetails.prizemoney[1]}</p>}
                            {eventDetails.prizemoney[2] && <p className="text-[#a07500]">🏆 2nd RunnerUp: {eventDetails.prizemoney[2]}</p>}
                        </div>
    }
                        {eventDetails.registrationFees && <p className="text-gray-300">💸 Registration Fees: {eventDetails.registrationFees}</p>}
                    </div>
                </div>
    
                <div className="space-y-6">
                    {eventDetails.description && <p className="text-gray-400">{eventDetails.description}</p>}
    
                    {eventDetails.rules?.length > 0 && (
                        <div>
                            <h2 className="text-2xl font-semibold">Rules & Guidelines</h2>
                            <ul className="list-disc list-inside text-gray-400 space-y-2">
                                {eventDetails.rules.map((rule, index) => (
                                    <li key={index}>{rule}</li>
                                ))}
                            </ul>
                        </div>
                    )}
    
                    {eventDetails.facilities && (
                        <div>
                            <h2 className="text-2xl font-semibold">Facilities & Support</h2>
                            <p className="text-gray-400">{eventDetails.facilities}</p>
                        </div>
                    )}
    
                    {eventDetails.judgingCriteria?.length > 0 && (
                        <div>
                            <h2 className="text-2xl font-semibold">Judging Criteria</h2>
                            <ul className="list-disc list-inside text-gray-400 space-y-2">
                                {eventDetails.judgingCriteria.map((criteria, index) => (
                                    <li key={index}>{criteria}</li>
                                ))}
                            </ul>
                        </div>
                    )}
    
                    <div className="text-center mt-8">
                        <a 
                            href={
                                eventDetails.contestname === "Hack-o-Nit"
                                    ? "https://docs.google.com/forms/d/e/1FAIpQLScicH5gboqHPdpyz1-hnD9K04ftNXtHumbAfqvwf67whbz9Ww/viewform?fbzx=-1065942362266758347"
                                    : "https://docs.google.com/forms/d/e/1FAIpQLSfruZFRAC35X3qbS8TRB6mDZEQIS_iVp2xdyro8Abf0ukI-OQ/viewform"
                            }
                        >
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
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
};

export default EventDetailPage;
