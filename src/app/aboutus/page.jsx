"use client";

import About from "../../../components/about";
import Collage from "../../../components/collage";

export default function AboutPage() {
 

  return (
    <div className="bg-black text-white px-4 sm:px-6 md:px-10 py-10 md:py-20">
    
    <div className="max-w-7xl mx-auto">
      <About />
      <div className="mt-10 md:mt-20">
        <Collage />
      </div>
    </div>
   
  </div>
  );
}
