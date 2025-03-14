"use client";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp ,faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { useSwipeable } from 'react-swipeable';
import { faCircleUp } from '@fortawesome/free-regular-svg-icons';

const events=[
  // Coding Contests
  { 
   id: 1,
   contestname: "Code It (Duo)", 
   date: "March 20, 2025", 
   time: "10:00 AM - 12:00 PM", 
   teamsize: "2", 
   studentcoordinator: "John Doe", 
   poster: "/codeit.jpg",
   category: "Coding",
   rules: [
     "You must have your platform-specific ID ready in advance and remember the email ID and password for the event. The platform for the contest will be announced soon.",
     "Arrival of 30 minutes before the registered time slot is mandatory; arriving after the start of the event will result in the loss of that much time in the contest.",
     "You are advised to bring your own pen (an A4 sheet will be provided for rough work); water bottles, foods are strictly prohibited inside the labs.",
     "Any kind of USB drive is strictly prohibited.",
     "College ID and payment receipt are a must for all participants.",
     "Maintain orderliness during entry to avoid chaos.",
     "Participants are solely responsible for their belongings such as bags and phones; the college authority or event volunteers will not be held accountable.",
     "Shoes and bags should be kept outside the lab.",
     "Any kind of cheating will not be tolerated.",
     "At any point in time, the decision of the judges is final.",
     "There will be two rounds, and the difficulty of the questions will increase with each round.",
     "The 1st round will have 9 questions and 45 minutes time.",
     "The final round will also have 5 questions and 1 hour time.",
     "Ranking will be based on the number of problems solved, and ties will be broken with the time taken to solve them.",
     "For the final round, participants who can solve the codes within minimal time will be declared the winners.",
     "Participants can code using the following languages: Java, C, C++, and Python3.",
     "Any damage or harm caused by any team will result in strict action taken against that team."
   ]
 },
 { 
   id: 2,
   contestname: "Debugging", 
   date: "March 20, 2025", 
   time: "1:00 PM - 3:00 PM", 
   teamsize: "1", 
   studentcoordinator: "Jane Smith", 
   poster: "/debugging.jpg",
   category: "Coding",
   rules: [
     "You must have your platform-specific ID ready in advance and remember the email ID and password for the event. The platform for the contest will be announced soon.",
     "Arrival of 30 minutes before the registered time slot is mandatory; arriving after the start of the event will result in the loss of that much time in the contest.",
     "You are advised to bring your own pen (an A4 sheet will be provided for rough work); water bottles, foods are strictly prohibited inside the labs.",
     "Any kind of USB drive is strictly prohibited.",
     "College ID and payment receipt are a must for all participants.",
     "Maintain orderliness during entry to avoid chaos.",
     "Participants are solely responsible for their belongings such as bags and phones; the college authority or event volunteers will not be held accountable.",
     "Shoes and bags should be kept outside the lab.",
     "Any kind of cheating will not be tolerated.",
     "At any point in time, the decision of the judges is final.",
     "There will be two rounds, and the difficulty of the questions will increase with each round.",
     "The 1st round will have 5 questions and 30 minutes time.",
     "The final round will also have 5 questions and 45 minutes time.",
     "Ranking will be based on the number of problems solved, and ties will be broken with the time taken to solve them.",
     "For the final round, participants who can solve the codes within minimal time will be declared the winners.",
     "Participants can code using the following languages: Java, C, C++, and Python3.",
     "Any damage or harm caused by any team will result in strict action taken against that team."
   ]
 },
 { 
   id: 3,
   contestname: "Pattern Relay", 
   date: "March 20, 2025", 
   time: "2:00 PM - 4:00 PM", 
   teamsize: "1", 
   studentcoordinator: "Alice Johnson", 
   poster: "/pattern_relay.jpg",
   category: "Coding",
   rules: [
     "You must have your platform-specific ID ready in advance and remember the email ID and password for the event. The platform for the contest will be announced soon.",
     "Arrival of 30 minutes before the registered time slot is mandatory; arriving after the start of the event will result in the loss of that much time in the contest.",
     "You are advised to bring your own pen (an A4 sheet will be provided for rough work); water bottles, foods are strictly prohibited inside the labs.",
     "Any kind of USB drive is strictly prohibited.",
     "College ID and payment receipt are a must for all participants.",
     "Maintain orderliness during entry to avoid chaos.",
     "Participants are solely responsible for their belongings such as bags and phones; the college authority or event volunteers will not be held accountable.",
     "Shoes and bags should be kept outside the lab.",
     "Any kind of cheating will not be tolerated.",
     "At any point in time, the decision of the judges is final.",
     "There will be two rounds, and the difficulty of the questions will increase with each round.",
     "The 1st round will have 6 questions and 30 minutes time.",
     "The final round will also have 6 questions and 45 minutes time.",
     "Ranking will be based on the number of problems solved, and ties will be broken with the time taken to solve them.",
     "For the final round, participants who can solve the codes within minimal time will be declared the winners.",
     "Participants can code using the following languages: C, C++, Java, Python3.",
     "Any damage or harm caused by any team will result in strict action taken against that team."
   ]
 },
 
   // Gaming Events
   { 
     id:4,
     contestname: "Valorant", 
     date: "March 20, 2025", 
     time: "5:00 PM - 9:00 PM", 
     teamsize: "5+1(substitute)", 
     studentcoordinator: "Mike Brown", 
     poster: "/valorant.jpg",
     category: "Gaming"
   },
   { 
     id:5,
     contestname: "E-Football", 
     date: "March 20, 2025", 
     time: "3:00 PM - 6:00 PM", 
     teamsize: "1", 
     studentcoordinator: "Chris Green", 
     poster: "/football.jpg",
       category: "Gaming"
   },
   { 
     id:6,
     contestname: "BGMI Squad", 
     date: "March 20, 2025", 
     time: "6:00 PM - 10:00 PM", 
     teamsize: "4+1(substitute)", 
     studentcoordinator: "Emma White", 
     poster: "/pubg.jpg",
       category: "Gaming"
   },
 
   // Fun Events
   {id:7, contestname: "Zip-Line", date: "March 20, 2025", time: "9:00 AM - 12:00 PM", teamsize: "1", studentcoordinator: "Lucas King", poster: "/zipline.jpg", category: "Fun Events" },
   {id:8, contestname: "Panipuri Marathon", date: "March 20, 2025", time: "2:00 PM - 4:00 PM", teamsize: "1", studentcoordinator: "Sophia Lee", poster: "/panipuri.jpg",category: "Fun Events" },
   { id:9, contestname: "Treasure Hunt", date: "March 20, 2025", time: "11:00 AM - 2:00 PM", teamsize: "5", studentcoordinator: "Daniel Scott", poster: "/treasurehunt.jpg",category: "Fun Events" },
   { id:10, contestname: "Team Building", date: "March 20, 2025", time: "1:00 PM - 3:00 PM", teamsize: "5", studentcoordinator: "Olivia Adams", poster: "/teambuilding.jpg" ,category: "Fun Events"},
   {id:11, contestname: "Squid Game", date: "March 20, 2025", time: "3:00 PM - 5:00 PM", teamsize: "5", studentcoordinator: "Ethan Carter", poster: "/squidgame.jpg" ,category: "Fun Events"},
   { id:12, contestname: "Throw Like a Pro", date: "March 20, 2025", time: "10:00 AM - 12:00 PM", teamsize: "1", studentcoordinator: "Ava Wilson", poster: "/throwlikeapro.jpg",category: "Fun Events" },
   {id:13, contestname: "Alice in Borderland", date: "March 20, 2025", time: "2:00 PM - 5:00 PM", teamsize: "1", studentcoordinator: "Liam Walker", poster: "/aliceborderland.jpg",category: "Fun Events" },
   {id:14, contestname: "Glitch", date: "March 20, 2025", time: "4:00 PM - 6:00 PM", teamsize: "5", studentcoordinator: "Mia Hall", poster: "/glitch.jpg" ,category: "Fun Events"},
 
   // Civil Creations
   { id:15,contestname: "Bridge Trix", date: "March 20, 2025", time: "9:00 AM - 11:00 AM", teamsize: "3", studentcoordinator: "Noah Young", poster: "/Bridgetrix.jpg" ,category: "Civil Creation"},
   { id:16,contestname: "Concrete Making", date: "March 20, 2025", time: "1:00 PM - 3:00 PM", teamsize: "4", studentcoordinator: "Ella Martinez", poster: "/Concretronix.jpg" ,category: "Civil Creation"},
   { id:17,contestname: "Tensegrity", date: "March 20, 2025", time: "10:00 AM - 12:00 PM", teamsize: "2", studentcoordinator: "James Robinson", poster: "/Tensiegrity.jpg", category: "Civil Creation" },
   //{id:18, contestname: "Caddist", date: "March 20, 2025", time: "2:00 PM - 4:00 PM", teamsize: "1", studentcoordinator: "Grace Moore", poster: "link_to_caddist_poster.jpg" , category: "Civil Creation"},
   
 
   // Mech Tech Events
   {id:19, contestname: "CAD War", date: "March 20, 2025", time: "10:00 AM - 12:00 PM", teamsize: "1", studentcoordinator: "Logan Harris", poster: "/Cad War.jpg" , category: "Mech Tech Events"},
   {id:20, contestname: "Mech Quiz", date: "March 20, 2025", time: "1:00 PM - 3:00 PM", teamsize: "4", studentcoordinator: "Zoe Turner", poster: "/Mech Quiz.jpg" , category: "Mech Tech Events"},
   { id:21,contestname: "Lathe War", date: "March 20, 2025", time: "3:00 PM - 5:00 PM", teamsize: "4", studentcoordinator: "Caleb Lopez", poster: "/Lathe War.jpg", category: "Mech Tech Events" },
 
   // Robotics Events
   { id:22,contestname: "Robo Ranger", date: "March 20, 2025", time: "9:00 AM - 12:00 PM", teamsize: "5", studentcoordinator: "Layla Hill", poster: "/roboranger.png" , category: "Robotics"},
   { id:23,contestname: "Poseidon Boat Race", date: "March 20, 2025", time: "2:00 PM - 5:00 PM", teamsize: "5", studentcoordinator: "Mason Wright", poster: "/boatrace.png" , category: "Robotics"},
   { id:24,contestname: "Robo Soccer", date: "March 20, 2025", time: "2:00 PM - 5:00 PM", teamsize: "5", studentcoordinator: "Mason Wright", poster: "/robosoccer.png" , category: "Robotics"},
   { id:25,contestname: "Sumo Slam", date: "March 20, 2025", time: "2:00 PM - 5:00 PM", teamsize: "5", studentcoordinator: "Mason Wright", poster: "/sumoslam.png" , category: "Robotics"},
   { id:26,contestname: "Line Follower", date: "March 20, 2025", time: "2:00 PM - 5:00 PM", teamsize: "5", studentcoordinator: "Mason Wright", poster: "/linefollower.png" , category: "Robotics"},
   { id:27,contestname: "Signal Servant", date: "March 20, 2025", time: "2:00 PM - 5:00 PM", teamsize: "5", studentcoordinator: "Mason Wright", poster: "/signalservant.png" , category: "Robotics"},
   //Hack-o-Nit
   {
     id: 28,
     contestname: "Hack-o-NiT",
     date: "March 20, 2025",
     time: "Overnight till 21st March, 2025",
     teamsize: "5",
     studentcoordinator: "Isabella Clark",
     poster: "/hackonit.jpg",
     bg1: "/1bg.png",
     bg2: "/2bg.png",
     bg3: "/3bg.png",
     category: "Hack-o-NiT",
     ideasubmissiondeadline: "March 14, 2025",
     prizemoney:["15k","10k","5k"],
     rules: [
       "General Rules",
       "Hack-O-NiT is a team-based event; each team must have 2 to 5 members.",
       "Participants must be present at the venue throughout the event (No remote participation).",
       "Teams must submit their final project before the deadline; late submissions will not be considered.",
       "Facilities & Support",
       "Wi-Fi, power outlets, and refreshments will be available.",
       "Mentors will be present for guidance, not direct coding help.",
       "Participants should bring their own laptops and required peripherals."
     ]
   },      
   // Management Events
   { id:29,contestname: "Marketing Warfare", date: "March 20, 2025", time: "10:00 AM - 12:00 PM", teamsize: "no  size", studentcoordinator: "Isabella Clark", poster: "/marketingwarfare.jpg", category: "Management Events" },
   { id:30,contestname: "Tagline", date: "March 20, 2025", time: "1:00 PM - 3:00 PM", teamsize: "no size", studentcoordinator: "William Hall", poster: "/tagline.jpg", category: "Management Events" },
   { id:31,contestname: "Ad Mad", date: "March 20, 2025", time: "1:00 PM - 3:00 PM", teamsize: "no size", studentcoordinator: "William Hall", poster: "/admad.jpg", category: "Management Events" },
   { id:32,contestname: "Mixed Puzzle", date: "March 20, 2025", time: "1:00 PM - 3:00 PM", teamsize: "no size", studentcoordinator: "William Hall", poster: "/mixedpuzzle.jpg", category: "Management Events" },
   { id:33,contestname: "Just A Minute", date: "March 20, 2025", time: "1:00 PM - 3:00 PM", teamsize: "no size", studentcoordinator: "William Hall", poster: "/justamin.jpg", category: "Management Events" },
   { id:34,contestname: "Clash of Capital", date: "March 20, 2025", time: "1:00 PM - 3:00 PM", teamsize: "no size", studentcoordinator: "William Hall", poster: "/coc.jpg", category: "Management Events" },
   { id:35,contestname: "Two Truths & A Lie", date: "March 20, 2025", time: "1:00 PM - 3:00 PM", teamsize: "no size", studentcoordinator: "William Hall", poster: "/truthlie.jpg", category: "Management Events" },
   { id:37,contestname: "Back to Back Drawing", date: "March 20, 2025", time: "1:00 PM - 3:00 PM", teamsize: "no size", studentcoordinator: "William Hall", poster: "/backtodrawing.jpg", category: "Management Events" },
   //elektron pro /lite
   { id:38,contestname: "Elektron Pro", date: "March 20, 2025", time: "10:00 AM - 12:00 PM", teamsize: "2/1", studentcoordinator: "William Hall", poster: "/elektronpro.jpg", category: "Elektron" },
   { id:39,contestname: "Elektron Lite", date: "March 20, 2025", time: "10:00 AM - 12:00 PM", teamsize: "2/1", studentcoordinator: "William Hall", poster: "/elektronlite.jpg", category: "Elektron" },
   //others
   {id:40, contestname: "APT Venture", date: "March 20, 2025", time: "10:00 AM - 12:00 PM", teamsize: "1", studentcoordinator: "William Hall", poster: "/aptventure.jpg", category: "Others" },
]

const EventCard = ({ title, image }) => (
  <div className="w-full sm:w-72 h-52 md:h-96 bg-black rounded-2xl shadow-lg overflow-hidden relative group">
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
        <h1 className="text-3xl md:text-4xl font-semibold text-white blinking-outline mb-4">Events</h1>
        <p className="text-gray-300">Explore. Compete. Innovate. Conquer.</p>
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
            <EventCard key={event.id} title={event.contestname} image={event.poster} />
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
