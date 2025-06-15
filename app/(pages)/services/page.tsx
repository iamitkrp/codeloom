"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Globe, Code } from "lucide-react";

const services = [
  {
    icon: <BrainCircuit size={40} className="mb-4 text-foreground" />,
    title: "AI Agent Development",
    description: "Building intelligent, autonomous workflows and agents that streamline complex business processes and enhance decision-making.",
  },
  {
    icon: <Globe size={40} className="mb-4 text-foreground" />,
    title: "Website & Web App Creation",
    description: "Crafting modern, animated, and performant websites and applications that provide a seamless user experience across all devices.",
  },
  {
    icon: <Code size={40} className="mb-4 text-foreground" />,
    title: "Custom Software Solutions",
    description: "Developing tailor-made tools, automations, and integrations that solve unique business challenges and drive growth.",
  },
];

const ServicesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="bg-background text-foreground py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold font-heading"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto"
          >
            We deliver high-impact solutions across three core areas of expertise.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-neutral-50/50 dark:bg-neutral-900/50 p-8 rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
            >
              {service.icon}
              <h3 className="text-2xl font-bold font-heading mb-2">{service.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage; 