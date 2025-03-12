"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
    setMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r fixed z-50 w-full px-5 from-[#1616161A] to-[#0C0C0C0D] text-white mr-5">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <div
            className="w-14 h-14 bg-white flex justify-center items-center rounded-full border-2 border-[#382570] cursor-pointer"
            onClick={() => handleNavigation("/")}
          >
            <Image
              src="/kritanj_logo.jpeg"
              alt="Kritanj Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <a href="https://www.nit.ac.in/">
          <div className="w-14 h-14 bg-white flex justify-center items-center rounded-full border-2 border-[#382570]">
            <Image src="/NiT.png" alt="NIT Logo" width={40} height={40} />
          </div>
          </a>
          <a href="https://www.jisgroup.org/">
          <div className="w-14 h-14 bg-white flex justify-center items-center rounded-full border-2 border-[#382570]">
            <Image
              src="/JiS.png"
              alt="JIS Logo"
              width={90}
              height={90}
              className="object-contain scale-110"
            />
          </div>
          </a>
        </div>

        <div className="hidden md:flex gap-8 text-md font-medium items-center">
          {[
            { name: "Hack-O-NiT", path: "/events/28" },
            { name: "Events", path: "/events" },
            { name: "Sponsors", path: "/sponsors" },
            { name: "About us", path: "/aboutus" },
          ].map((link) => (
            <button
              key={link.path}
              onClick={() => handleNavigation(link.path)}
              className="relative group transition duration-300 pb-1 hover:text-yellow-500"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 duration-200"></span>
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-2xl transition-all ease-in-out duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed z-50 translate-x-50 w-40  flex flex-col items-center mt-4 space-y-4  bg-[#0b0b0bcb] py-4 rounded-md">
          {[
            { name: "Hack-O-NiT", path: "/events/28" },
            { name: "Events", path: "/events" },
            { name: "Sponsors", path: "/sponsors" },
            { name: "About us", path: "/aboutus" },
          ].map((link) => (
            <button
              key={link.path}
              onClick={() => handleNavigation(link.path)}
              className="hover:underline"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
