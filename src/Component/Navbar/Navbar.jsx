import React from "react";
import { IoMdMenu } from "react-icons/io";
import "../../index.css"
import { MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    path: "#",
  },
  {
    id: 3,
    title: "About us",
    path: "#",
  },
  {
    id: 4,
    title: "Our Team",
    path: "#",
  },
  {
    id: 5,
    title: "Contact us",
    path: "#",
  },
];

const Navbar = () => {
  return (
    <nav className="relative z-10">
      <motion.div 
      initial={{y:70,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{duration:0.6,delay:0.4,ease:"easeInOut"}}
      className="container py-10 flex justify-between items-center">
        {/* logo section */}
        <div>
          <h1 className="font-bold text-black text-2xl">The RJ Coding</h1>
        </div>
        {/* Menu section */}
        <div className="lg:block hidden">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((m) => (
              <li key={m.id}>
                <a href={m.path} className="inline-block py-2 px-3 hover:text-secondary relative group">
                  <div className="w-2 h-2 bg-secondary absolute mt-2 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {m.title}
                </a>
              </li>
            ))}
            <li><button className="primary-btn">Sign In</button></li>
          </ul>
          
        </div>
        <div className="lg:hidden">
              <MdMenu className="text-4xl"/>
        </div>
        </motion.div>
        {/* Mobile Hamburger section */}
    </nav>
  );
};

export default Navbar;
