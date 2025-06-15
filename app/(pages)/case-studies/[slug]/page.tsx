"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type CaseStudyDetailPageProps = {
  params: {
    slug: string;
  };
};

const CaseStudyDetailPage = ({ params }: CaseStudyDetailPageProps) => {
  const { slug } = params;
  // In a real application, you would fetch the case study data based on the slug
  const caseStudy = {
    title: "Revolutionizing a FinTech Startup",
    category: "AI & Web Development",
    description: "This is a placeholder for a detailed case study. The content here would describe the project's challenges, our approach, and the results we delivered.",
    image: "/images/placeholder.svg",
    challenge: "The main challenge was to integrate a complex AI model with a user-friendly web interface, ensuring high performance and a seamless user experience.",
    solution: "Our team developed a custom API to connect the AI model to a modern web application built with Next.js. We focused on creating an intuitive UI that simplified complex data visualizations.",
    result: "The new platform reduced data processing time by 75% and received highly positive feedback from users for its design and usability.",
  };

  return (
    <div className="py-24 sm:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-neutral-500 hover:text-foreground transition-colors mb-8">
              <ArrowLeft size={18} />
              Back to Case Studies
            </Link>
            <p className="text-base font-medium text-neutral-500 dark:text-neutral-400">{caseStudy.category}</p>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mt-2">{`Project: ${slug.replace(/-/g, ' ')}`}</h1>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">{caseStudy.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="my-12"
          >
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              width={1200}
              height={800}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>The Challenge</h2>
            <p>{caseStudy.challenge}</p>
            <h2>Our Solution</h2>
            <p>{caseStudy.solution}</p>
            <h2>The Result</h2>
            <p>{caseStudy.result}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetailPage; 