"use client";

import About from "../../../components/about";
import Collage from "../../../components/collage";
import UsSection from "../../../components/us";

export default function AboutPage() {
 

  return (
    <div className="bg-black  text-white px-4 sm:px-6 md:px-10 py-10 md:py-20">
    
    <div className="max-w-7xl mx-auto">
      <About />
      <div className="mt-10 md:mt-20">
        <Collage />
      </div>
    </div>
    <UsSection />
    <div className="mt-10 md:mt-20 text-center">
    <span className="text-[1rem] font-semibold blinking-outline">"A website may look simple, but only the creator knows the countless lines of code and efforts in designing that breathe life into it." </span>
    </div>
  </div>
  );
}
