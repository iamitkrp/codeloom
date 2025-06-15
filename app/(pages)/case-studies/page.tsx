"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    category: "AI Development",
    title: "Intelligent Automation for FinTech",
    description: "Developed a custom AI agent to automate financial reporting and analysis, reducing manual effort by 90%.",
    image: "/images/placeholder.svg",
    link: "/case-studies/fintech-ai",
  },
  {
    category: "Web App Creation",
    title: "E-Commerce Platform for a Fashion Brand",
    description: "Built a highly performant and visually stunning e-commerce website with a custom 3D product viewer.",
    image: "/images/placeholder.svg",
    link: "/case-studies/fashion-ecommerce",
  },
  {
    category: "Custom Software",
    title: "Project Management Tool for Agencies",
    description: "Created a bespoke project management solution to streamline workflows and improve team collaboration.",
    image: "/images/placeholder.svg",
    link: "/case-studies/pm-tool",
  },
    {
    category: "Web App Creation",
    title: "Booking System for a Travel Company",
    description: "Designed and developed a seamless booking platform with real-time availability and secure payments.",
    image: "/images/placeholder.svg",
    link: "/case-studies/travel-booking",
  },
];

const CaseStudiesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="py-24 sm:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-heading">Our Work</h1>
          <p className="mt-4 text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
            Explore a selection of our projects that showcase our commitment to quality, innovation, and client success.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="group"
              variants={itemVariants}
            >
              <Link href={study.link}>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={study.image}
                    alt={study.title}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-6">
                  <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{study.category}</p>
                  <h3 className="text-2xl font-bold font-heading mt-2 group-hover:underline">{study.title}</h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-400">{study.description}</p>
                   <div className="flex items-center gap-2 mt-4 font-medium text-foreground">
                        Read Case Study
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudiesPage; 