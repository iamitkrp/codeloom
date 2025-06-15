"use client";

import React from "react";
import { motion } from "framer-motion";
import { Palette, Code2, Brain, CheckCircle } from "lucide-react";

const pillars = [
  {
    icon: <Palette size={32} className="text-foreground" />,
    title: "Visual Finesse (Design)",
    description: "We don't just build software; we craft experiences. Our design philosophy marries aesthetics with usability, ensuring every pixel serves a purpose. From sleek UIs to immersive 3D elements, we create digital products that are not only beautiful but also intuitive and engaging.",
  },
  {
    icon: <Code2 size={32} className="text-foreground" />,
    title: "Engineering Excellence (Code)",
    description: "At our core, we are builders. We write clean, scalable, and maintainable code to construct robust and performant digital solutions. Our commitment to best practices means your project is built on a solid foundation, ready for future growth and evolution.",
  },
  {
    icon: <Brain size={32} className="text-foreground" />,
    title: "Practical Intelligence (AI)",
    description: "We harness the power of AI to create intelligent systems that are both practical and powerful. Our focus is on developing AI agents and workflows that deliver tangible business value, automating complex tasks and providing actionable insights to drive your business forward.",
  },
];

const benefits = [
    "Tailor-Made Digital Experiences",
    "Seamless Functionality & Visual Finesse",
    "Future-Proof & Scalable Solutions",
    "Transparent & Collaborative Process"
]

const WhyChooseUsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="py-24 sm:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-heading"
          >
            Bridging Functionality with Visual Finesse
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-neutral-500 dark:text-neutral-400"
          >
            CODELOOM is not just another development agency. We are a team of passionate creators, thinkers, and engineers dedicated to weaving together design, code, and intelligence to deliver exceptional digital products.
          </motion.p>
        </div>

        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {pillars.map((pillar) => (
            <motion.div key={pillar.title} variants={itemVariants}>
              <div className="flex items-center gap-4 mb-4">
                {pillar.icon}
                <h2 className="text-2xl font-bold font-heading">{pillar.title}</h2>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400">{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-24 bg-neutral-100/50 dark:bg-neutral-900/50 p-12 rounded-lg">
            <h2 className="text-3xl font-bold font-heading text-center mb-8">
                Your Partner in Digital Innovation
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {benefits.map(benefit=>(
                     <motion.div 
                        key={benefit}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-3"
                    >
                        <CheckCircle className="w-6 h-6 text-green-500" />
                        <span className="text-lg">{benefit}</span>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsPage; 