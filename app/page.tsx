"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const headline = "Weaving Design, Code, and Intelligence";
  const words = headline.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-foreground relative overflow-hidden">
      <video
        src="/media/bg-animation.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="absolute inset-0 bg-black/50 -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 tracking-tight text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block mr-4"
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-200 mb-12"
          style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}
        >
          Codeloom is a software development agency focused on AI Agent Development,
          modern Website & Web App Creation, and Custom Software Solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full font-medium text-lg hover:bg-white/20 transition-colors group"
          >
            Explore Our Services
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
