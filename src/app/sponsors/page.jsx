"use client";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

const SponsorsSection = () => {
    const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
    const [hoveredImage, setHoveredImage] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isPoweredVisible, setIsPoweredVisible] = useState(false);

    const controls1 = useAnimation();
    const controls2 = useAnimation();

    // Scroll-based visibility tracking
    useEffect(() => {
        const handleScroll = () => {
            const associationImage = document.getElementById("popup-image-association");
            const poweredImage = document.getElementById("popup-image-powered");

            if (associationImage) {
                const rect = associationImage.getBoundingClientRect();
                setIsVisible(rect.top < window.innerHeight * 0.8);
            }
            if (poweredImage) {
                const rect = poweredImage.getBoundingClientRect();
                setIsPoweredVisible(rect.top < window.innerHeight * 0.8);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Mouse move tracking
    const handleMouseMove = (e, id) => {
        const { offsetX, offsetY, target } = e.nativeEvent;
        const width = target.clientWidth;
        const height = target.clientHeight;

        const x = (offsetX / width) * 100;
        const y = (offsetY / height) * 100;

        setGlowPosition({ x, y });
        setHoveredImage(id); // Activate glow for the hovered image
    };

    return (
        <section className="w-full h-full px-4 md:px-10 lg:px-20 py-10 mt-5">
            <div className="relative">
                <h1 className="text-3xl font-semibold glowing-text text-left">Sponsors</h1>
                <h2 className="hackonitsubhead text-left">Our Sponsors And Partners</h2>
                <div className="border border-gray-300 my-5"></div>

                {/* Technical Collaboration */}
                <h2 className="text-2xl font-semibold text-center">Technical Collaboration</h2>

                {/* Marquee Section */}
                <div className="relative w-full overflow-hidden mt-6">
                <marquee direction="left" scrollamount="20" scrolldelay="0" className="h-56 rounded-lg mb-6 justify-between p-2 bg-gradient-to-r from-[#151b4b] via-[#421856] to-[#5d2901]">
        <div className="flex gap-10">
            <img src="/mathworks.jpg" alt="Sponsor 1" className="w-96 h-52 rounded-md " />
            <img src="/ieeecis.jpg" alt="Sponsor 2" className="w-72 h-52 rounded-md" />
            <img src="/ieeecomsoc.jpg" alt="Sponsor 3" className="w-72 h-52 rounded-md" />
            <img src="/ieeecs.png" alt="Sponsor 4" className="w-96 h-52 rounded-md" />
            <img src="/ieeepes.png" alt="Sponsor 5" className="w-72 h-52 rounded-md" />
            <img src="/engineering.png" alt="Sponsor 7" className="w-72 h-52 rounded-md" />
            <img src="/asce.png" alt="Sponsor 8" className="w-72 h-52 rounded-md" />
        </div>
    </marquee>
                </div>

                <div className="w-full flex flex-col items-center">
            {/* In Association With */}
            <div
                className="relative text-center mt-20 group"
                onMouseEnter={() => setHoveredImage("association")}
                onMouseLeave={() => setHoveredImage(null)}
                onMouseMove={(e) => handleMouseMove(e, "association")}
            >
                <h2 className="text-2xl font-semibold">In Association With</h2>

                {/* Glow Effect - Only active on hover */}
                {hoveredImage === "association" && (
                    <motion.div
                        className="absolute w-40 h-40 md:w-80 md:h-80 rounded-full bg-blue-500 opacity-30 blur-3xl pointer-events-none"
                        style={{
                            left: `${glowPosition.x}%`,
                            top: `${glowPosition.y}%`,
                            transform: "translate(-50%, -50%)",
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    />
                )}

                {/* Image */}
                <motion.img
                    id="popup-image-association"
                    src="/mcci.jpg"
                    alt="Association Partner"
                    className="w-40 h-40 md:w-80 md:h-80 mx-auto mt-10 shadow-lg rounded-lg object-cover transition-all duration-500 group-hover:scale-105"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />
            </div>

            {/* Powered By */}
            <div
                className="relative text-center mt-20 group"
                onMouseEnter={() => setHoveredImage("powered")}
                onMouseLeave={() => setHoveredImage(null)}
                onMouseMove={(e) => handleMouseMove(e, "powered")}
            >
                <h2 className="text-2xl font-semibold">Powered By</h2>

                {/* Glow Effect - Only active on hover */}
                {hoveredImage === "powered" && (
                    <motion.div
                        className="absolute w-40 h-40 md:w-80 md:h-80 rounded-full bg-[#9c29d2] opacity-30 blur-3xl pointer-events-none"
                        style={{
                            left: `${glowPosition.x}%`,
                            top: `${glowPosition.y}%`,
                            transform: "translate(-50%, -50%)",
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    />
                )}

                {/* Image */}
                <motion.img
                    id="popup-image-powered"
                    src="/idea.jpg"
                    alt="Powered By"
                    className="h-40 md:w-[45rem] md:h-64 mx-auto mt-10 shadow-lg rounded-lg transition-all duration-500 group-hover:scale-105"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isPoweredVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />
            </div>
        </div>
            </div>
        </section>
    );
};

export default SponsorsSection;
