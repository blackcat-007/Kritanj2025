import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import "@fontsource/poppins";

const kritanjName = "/kritanj-removedbg.png";
const logo = "/kritanj_white.png";

const Footer = () => {
  return (
    <footer
      className=" absolute z-20  md:ml-0 md:w-full bg-[#060606e8] object-cover w-full   text-white py-20 px-6 md:px-12"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-6 md:gap-10 text-left">
        <div className="flex flex-col">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Kritanj Logo"
              className="w-15 filter brightness-0 invert contrast-200"
            />
            <img src={kritanjName} alt="Kritanj Name" className="w-50" />
          </div>
          <p className="text-lg mt-3 opacity-80 text-gray-300">
            Narula Institute Of Technology
          </p>
          <p className="text-lg opacity-80 mt-2 leading-relaxed text-gray-300">
            81, Nilgunj Rd, Jagarata Pally, <br />
            Deshpriya Nagar, <br />
            Agarpara, Kolkata, West Bengal <br />
            700109
          </p>
          <p className="text-xl mt-20 opacity-60 text-gray-300">
            © 2025 Kritanj
          </p>
        </div>

        <div>
         
        </div>

        <div>
          <h2 className="text-2xl font-semibold blinking-outline mt-8">
            Contact Details
          </h2>
          <h3 className="mt-3">Dr. Bansari Deb Majumder</h3>
          <div className="mt-2 flex items-center space-x-2">
            <FaPhoneAlt />
            <span className="text-lg opacity-80 text-gray-300">
            +91 990037 68390
            </span>
          </div>
          <h3 className="mt-3">Dr. Shubhendu Banerjee</h3>
          <div className="mt-2 flex items-center space-x-2">
            <FaPhoneAlt />
            <span className="text-lg opacity-80 text-gray-300">
            +91 87778 20813
            </span>
          </div>
          <a href="mailto:events@nit.ac.in">
              <div className="mt-3 flex items-center space-x-2">
                 <FaEnvelope />
              <span className="text-lg opacity-80 text-gray-300">
              events@nit.ac.in
              </span>
               </div>
                </a>


          <h2 className="text-2xl font-semibold blinking-outline mt-5">
            Connect With Us
          </h2>
          <div className="mt-3 flex space-x-4">
            <a
              href="https://www.instagram.com/nitnarula?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#8a72e6] transition"
            >
              <FaInstagram size={50} />
            </a>
            <a
              href="https://www.facebook.com/nitnarula?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#8a72e6] transition"
            >
              <IoLogoFacebook size={55} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;