"use client";

import About from "../../../components/about";
import Collage from "../../../components/collage";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
export default function AboutPage() {
 

  return (
    <div className="bg-black text-white px-4 sm:px-6 md:px-10 py-10 md:py-20">
      <Navbar />
    <div className="max-w-7xl mx-auto">
      <About />
      <div className="mt-10 md:mt-20">
        <Collage />
      </div>
    </div>
    <Footer />
  </div>
  );
}
