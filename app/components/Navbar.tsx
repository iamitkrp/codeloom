"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import MenuOverlay from "./MenuOverlay";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 text-white">
            <Link href="/" className="text-2xl font-bold">
              CODELOOM
            </Link>

            <button
              onClick={toggleMenu}
              className="flex items-center space-x-3 text-lg group"
            >
              <span className="group-hover:text-neutral-300 transition-colors">Menu</span>
              <div className="flex flex-col space-y-1.5">
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6.5 : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="block h-0.5 w-6 bg-white"
                ></motion.span>
                <motion.span
                  animate={{ opacity: isOpen ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                  className="block h-0.5 w-6 bg-white"
                ></motion.span>
                <motion.span
                  animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6.5 : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="block h-0.5 w-6 bg-white"
                ></motion.span>
              </div>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && <MenuOverlay onClose={toggleMenu} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 