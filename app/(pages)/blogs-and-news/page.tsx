"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    date: "June 1, 2024",
    title: "The Rise of AI Agents in Business Automation",
    excerpt: "Discover how intelligent agents are transforming industries by automating complex workflows and driving efficiency.",
    link: "/blogs-and-news/ai-agents-rise",
  },
  {
    date: "May 20, 2024",
    title: "Designing for Emotion: The Art of Animated UI",
    excerpt: "A deep dive into the principles of creating engaging user interfaces with meaningful animations and transitions.",
    link: "/blogs-and-news/designing-for-emotion",
  },
  {
    date: "May 5, 2024",
    title: "Headless CMS vs. Traditional CMS: What to Choose?",
    excerpt: "An analysis of the pros and cons of headless and traditional content management systems for modern web development.",
    link: "/blogs-and-news/headless-vs-traditional-cms",
  },
];

const BlogsAndNewsPage = () => {
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
          <h1 className="text-4xl md:text-5xl font-light font-heading">Insights & Updates</h1>
          <p className="mt-4 text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
            Stay informed with our latest articles, company news, and thoughts on the future of technology.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="group"
              variants={itemVariants}
            >
              <Link href={post.link}>
                <div className="p-8 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50/50 dark:hover:bg-neutral-900/50 transition-colors duration-300">
                  <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{post.date}</p>
                  <h2 className="text-3xl font-bold font-heading mt-2 group-hover:underline">{post.title}</h2>
                  <p className="mt-4 text-neutral-600 dark:text-neutral-400">{post.excerpt}</p>
                  <div className="flex items-center gap-2 mt-6 font-medium text-foreground">
                    Read More
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

export default BlogsAndNewsPage; 