import React from "react"; 
import { FaCoffee, FaFacebook, FaTwitter, FaInstagram, FaHeart, FaLinkedin } from "react-icons/fa";
 
const Footer = () => { 
  return ( 
    <footer className="bg-[#f9f5f0] border-t border-[#e5cdb7] mt-auto"> 
      <div className="w-full max-w-7xl mx-auto p-4 md:py-8"> 
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex items-center text-xl font-semibold text-[#5c4434] mb-4 md:mb-0">
            <FaCoffee className="mr-2 text-[#8c6d5c]" /> Sleepy Owl Coffee
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-[#8c6d5c] hover:text-[#5c4434] transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-[#8c6d5c] hover:text-[#5c4434] transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-[#8c6d5c] hover:text-[#5c4434] transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-[#8c6d5c] hover:text-[#5c4434] transition-colors">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        <hr className="my-6 border-[#c69f80] opacity-30 sm:mx-auto lg:my-8" /> 
        <div className="flex flex-col md:flex-row justify-between items-center">
          <span className="inline-flex items-center text-sm text-[#8c7b6e] mb-4 md:mb-0"> 
            Made with <FaHeart className="mx-1 text-red-500" /> by Parth Kulkarni
          </span>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#8c7b6e]">
            <a href="#" className="hover:text-[#5c4434] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#5c4434] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#5c4434] transition-colors">Contact Us</a>
          </div>
        </div>
      </div> 
    </footer> 
  ); 
}; 
 
export default Footer;