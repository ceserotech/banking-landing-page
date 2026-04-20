import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const links = ["Home", "About", "Contact", "Blog", "Careers"];

  return (
    <nav className="w-10/10 bg-gray-100 text-gray-600 m-0 pt-3 z-20 relative">
      <div className="w-9/10 mx-auto px-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold ">
            <img src="src/assets/images/logo-dark.svg" alt="" />
          </div>

          {/* Desktop Menu */}
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
            <ul className="hidden md:flex space-x-8">
              {links.map((link) => (
                <li key={link} className="relative">
                  <button
                    onClick={() => setActive(link)}
                    className="text-gray-500 hover:text-gray-900 pb-2"
                  >
                    {link}
                  </button>

                  {/* Active underline */}
                  {active === link && (
                    <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[linear-gradient(to_right,hsl(136,65%,51%),hsl(192,70%,51%))] rounded-full"></span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
            <a href="#" className="hover:text-gray-300">
              Projects
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </div> */}

          <div>
            <button className="bg-[linear-gradient(to_right,hsl(136,65%,51%),hsl(192,70%,51%))] text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition duration-300 hidden md:block">
              Request Invite
            </button>
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <a href="#" className="block py-2 hover:text-gray-300">
            Home
          </a>
          <a href="#" className="block py-2 hover:text-gray-300">
            About
          </a>
          <a href="#" className="block py-2 hover:text-gray-300">
            Projects
          </a>
          <a href="#" className="block py-2 hover:text-gray-300">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
