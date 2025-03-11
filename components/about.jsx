"use client";

import Image from "next/image";
import { useState } from "react";

const About = () => {
    const [isHovered, setIsHovered] = useState(false);
    const kritanjLogo = "/kritanj_logo.jpeg";
    const kritanjName = "/kritanj_name.png";

    return (
        <div className="bg-black text-white px-10 py-20">
            <section className="text-left">
                <h2 className="text-4xl font-bold text-white blinking-outline">About Us</h2>
                <p className="text-gray-400 mt-2">Know Us? Experience The Legacy!</p>
                <div className="w-full h-[2px] bg-gray-400 my-4"></div>

                <div 
                    className="flex flex-col md:flex-row md:items-center gap-10 mt-10"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="relative w-full sm:w-[300px] flex justify-start md:justify-center items-center">
                        <div
                            className={`absolute sm:w-[300px] sm:h-[300px] w-[200px] h-[200px]  bg-pink-600 rounded-lg transition-all duration-700 ease-in-out`}
                        ></div>

                        <Image
                            src={kritanjLogo}
                            alt="Kritanj Logo"
                            width={300}
                            height={300}
                            className={`relative z-10  sm:w-[300px] sm:h-[300px]  w-[200px] h-[200px] object-contain rounded-lg cursor-pointer transition-transform duration-500 ease-in-out ${
                                isHovered ? "translate-x-4 translate-y-4" : ""
                            }`}
                        />
                    </div>
                    <div className="w-full md:w-2/3 md:pl-10">
                        <Image 
                            src={kritanjName} 
                            alt="Kritanj Name" 
                            width={300} 
                            height={300} 
                            className="object-contain rounded-lg" 
                        />
                        <p className="mt-10 text-gray-300">
                            Kritanj Is The Annual Two-Day Tech Fest of Narula Institute of Technology, Bringing Together Innovation,
                            Technology, And Creativity. Held from <span className="text-purple-700">20th - 21st March 2025</span>,
                            Kritanj serves as a platform for students to compete, collaborate, and create. The Name Kritanj is Derived
                            From "Kriti" (Creation) And "Anj" (Offering), Symbolizing The Power Of Idea Turning Into Reality.
                            <br /><br />
                            Since Its Inception, Kritanj Has Aimed To Foster Technological Excellence By Hosting Hackathons, Coding
                            Competitions, Robotics Challenges, AI Workshops, And Entrepreneurial Events. It Is A Place Where Passion
                            Meets Purpose, Where Students Push The Boundaries Of Technology To Shape A Better Future. At Kritanj, We
                            Believe That True Innovation Comes From Challenging Limits, Solving Real-World Problems, And Striving For
                            Excellence. As We Move Forward, Kritanj Continues to Explore The Unimagined, Build The Impossible, And
                            Redefine The Future. Join Us In This Celebration Of Technology And Innovation — Because The Future Starts
                            Here.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
