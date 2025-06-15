"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/blogs-and-news", label: "Blog" },
];

type MenuOverlayProps = {
  onClose: () => void;
};

const MenuOverlay = ({ onClose }: MenuOverlayProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-40 bg-black/95 backdrop-blur-sm text-white flex items-center justify-center"
    >
      <div className="text-center">
        <nav className="flex flex-col space-y-8 text-4xl md:text-6xl font-light">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Link
                href={link.href}
                onClick={onClose}
                className="hover:text-neutral-400 transition-colors"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16"
        >
          <Link
            href="/contact"
            onClick={onClose}
            className="px-8 py-3 border border-white/50 rounded-full text-lg hover:bg-white/10 transition-colors"
          >
            Contact
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MenuOverlay; 