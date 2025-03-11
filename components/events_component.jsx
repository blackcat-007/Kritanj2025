"use client";
import React, { useState, useEffect } from 'react';

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
   teamsize: "3", 
   studentcoordinator: "Alice Johnson", 
   poster: "/pattern relay.jpg",
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
     teamsize: "5", 
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
     teamsize: "4", 
     studentcoordinator: "Emma White", 
     poster: "/pubg.jpg",
       category: "Gaming"
   },
 
   // Fun Events
   {id:7, contestname: "Zip-Line", date: "March 20, 2025", time: "9:00 AM - 12:00 PM", teamsize: "1", studentcoordinator: "Lucas King", poster: "link_to_zipline_poster.jpg", category: "Fun Events" },
   {id:8, contestname: "Panipuri Marathon", date: "March 20, 2025", time: "2:00 PM - 4:00 PM", teamsize: "1", studentcoordinator: "Sophia Lee", poster: "link_to_panipuri_poster.jpg",category: "Fun Events" },
   { id:9, contestname: "Treasure Hunt", date: "March 20, 2025", time: "11:00 AM - 2:00 PM", teamsize: "4", studentcoordinator: "Daniel Scott", poster: "link_to_treasure_hunt_poster.jpg",category: "Fun Events" },
   { id:10, contestname: "Team Building", date: "March 20, 2025", time: "1:00 PM - 3:00 PM", teamsize: "6", studentcoordinator: "Olivia Adams", poster: "link_to_team_building_poster.jpg" ,category: "Fun Events"},
   {id:11, contestname: "Squid Game", date: "March 20, 2025", time: "3:00 PM - 5:00 PM", teamsize: "5", studentcoordinator: "Ethan Carter", poster: "link_to_squid_game_poster.jpg" ,category: "Fun Events"},
   { id:12, contestname: "Throw Like a Pro", date: "March 20, 2025", time: "10:00 AM - 12:00 PM", teamsize: "1", studentcoordinator: "Ava Wilson", poster: "link_to_throw_poster.jpg",category: "Fun Events" },
   {id:13, contestname: "Alice in Borderland", date: "March 20, 2025", time: "2:00 PM - 5:00 PM", teamsize: "3", studentcoordinator: "Liam Walker", poster: "link_to_alice_poster.jpg",category: "Fun Events" },
   {id:14, contestname: "Glitch", date: "March 20, 2025", time: "4:00 PM - 6:00 PM", teamsize: "2", studentcoordinator: "Mia Hall", poster: "link_to_glitch_poster.jpg" ,category: "Fun Events"},
 
   // Civil Creations
   { id:15,contestname: "Bridge Trix", date: "March 20, 2025", time: "9:00 AM - 11:00 AM", teamsize: "3", studentcoordinator: "Noah Young", poster: "/Bridgetrix.jpg" ,category: "Civil Creation"},
   { id:16,contestname: "Concrete Making", date: "March 20, 2025", time: "1:00 PM - 3:00 PM", teamsize: "4", studentcoordinator: "Ella Martinez", poster: "/Concretonix.jpg" ,category: "Civil Creation"},
   { id:17,contestname: "Tensegrity", date: "March 20, 2025", time: "10:00 AM - 12:00 PM", teamsize: "2", studentcoordinator: "James Robinson", poster: "/Tensiegrity.jpg", category: "Civil Creation" },
   {id:18, contestname: "Caddist", date: "March 20, 2025", time: "2:00 PM - 4:00 PM", teamsize: "1", studentcoordinator: "Grace Moore", poster: "link_to_caddist_poster.jpg" , category: "Civil Creation"},
   
 
   // Mech Tech Events
   {id:19, contestname: "CAD War", date: "March 20, 2025", time: "10:00 AM - 12:00 PM", teamsize: "2", studentcoordinator: "Logan Harris", poster: "/Cad War.jpg" , category: "Mech Tech Events"},
   {id:20, contestname: "Mech Quiz", date: "March 20, 2025", time: "1:00 PM - 3:00 PM", teamsize: "1", studentcoordinator: "Zoe Turner", poster: "/Mech Quiz.jpg" , category: "Mech Tech Events"},
   { id:21,contestname: "Lathe War", date: "March 20, 2025", time: "3:00 PM - 5:00 PM", teamsize: "2", studentcoordinator: "Caleb Lopez", poster: "/Lathe War.jpg", category: "Mech Tech Events" },
 
   // Robotics Events
   { id:22,contestname: "Robo Gear", date: "March 20, 2025", time: "9:00 AM - 12:00 PM", teamsize: "3", studentcoordinator: "Layla Hill", poster: "link_to_robo_gear_poster.jpg" , category: "Robotics"},
   { id:23,contestname: "Poseidon Boat Race", date: "March 20, 2025", time: "2:00 PM - 5:00 PM", teamsize: "4", studentcoordinator: "Mason Wright", poster: "link_to_boat_race_poster.jpg" , category: "Robotics"},
   //Hack-o-Nit
   {id:24 , contestname: "Hack-o-Nit", date: "March 20, 2025", time: "10:00 AM - 12:00 PM", teamsize: "5", studentcoordinator: "Isabella Clark", poster: "/hackonit.jpg", category: "Hack-o-Nit" },
   // Management Events
   { id:25,contestname: "Marketing Warfare", date: "March 20, 2025", time: "10:00 AM - 12:00 PM", teamsize: "3", studentcoordinator: "Isabella Clark", poster: "link_to_marketing_poster.jpg", category: "Management Events" },
   { id:26,contestname: "Tagline Stock Market", date: "March 20, 2025", time: "1:00 PM - 3:00 PM", teamsize: "2", studentcoordinator: "William Hall", poster: "link_to_stock_market_poster.jpg", category: "Management Events" },
]

const EventCard = ({ title, image }) => (
  <div className="w-72 h-96 bg-black rounded-2xl shadow-lg overflow-hidden relative">
    <img src={image} alt={title} className="w-full h-full object-cover" />
    <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl text-black flex items-center justify-between p-3 shadow-md">
      <h2 className="text-lg font-semibold">{title}</h2>
      <span className="text-xl">➜</span>
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
        <h1 className="text-3xl md:text-4xl font-bold text-white  blinking-outline mb-4">Events</h1>
        <p className="text-gray-300">Explore. Compete. Innovate. Conquer.</p>
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
            <EventCard key={event.id} title={event.contestname} image={event.poster} />
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
