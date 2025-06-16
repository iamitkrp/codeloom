"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { gsap } from "gsap";

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
  const liquidRef = useRef(null);
  const blobsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Create liquid morphing animation for background blobs
    const blobs = blobsRef.current;
    
    blobs.forEach((blob, index) => {
      if (blob) {
        // Continuous morphing animation
        gsap.to(blob, {
          duration: 8 + index * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          scale: 1.2 + index * 0.3,
          rotation: 360,
          borderRadius: `${50 + index * 10}% ${60 + index * 15}% ${40 + index * 5}% ${70 + index * 20}%`,
        });

        // Floating animation
        gsap.to(blob, {
          duration: 6 + index * 1.5,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          x: `${(index % 2 === 0 ? 1 : -1) * (50 + index * 20)}px`,
          y: `${(index % 2 === 0 ? -1 : 1) * (30 + index * 15)}px`,
        });

        // Opacity pulsing
        gsap.to(blob, {
          duration: 4 + index,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          opacity: 0.1 + (index * 0.05),
        });
      }
    });

    return () => {
      // Cleanup animations
      blobs.forEach(blob => {
        if (blob) {
          gsap.killTweensOf(blob);
        }
      });
    };
  }, []);

  // Add blob to refs array
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !blobsRef.current.includes(el)) {
      blobsRef.current.push(el);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-40 text-white flex items-center justify-center overflow-hidden"
    >
      {/* Blurred Background */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-2xl"></div>
      
      {/* Animated Liquid Blobs */}
      <div ref={liquidRef} className="absolute inset-0 overflow-hidden">
        {/* Blob 1 */}
        <div
          ref={addToRefs}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full filter blur-xl"
        />
        
        {/* Blob 2 */}
        <div
          ref={addToRefs}
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full filter blur-xl"
        />
        
        {/* Blob 3 */}
        <div
          ref={addToRefs}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-blue-500/25 to-cyan-500/25 rounded-full filter blur-xl"
        />
        
        {/* Blob 4 */}
        <div
          ref={addToRefs}
          className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-br from-green-500/15 to-blue-500/15 rounded-full filter blur-xl"
        />
        
        {/* Blob 5 */}
        <div
          ref={addToRefs}
          className="absolute top-1/3 right-1/3 w-56 h-56 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full filter blur-xl"
        />
      </div>

      {/* Fullscreen Menu Content */}
      <div className="relative z-10 text-center">
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
                className="block hover:text-white/90 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:drop-shadow-lg"
                style={{ textShadow: 'none' }}
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
            className="inline-block px-8 py-3 border border-white/50 rounded-full text-lg hover:bg-white/10 hover:border-white/70 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
          >
            Contact
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MenuOverlay; 