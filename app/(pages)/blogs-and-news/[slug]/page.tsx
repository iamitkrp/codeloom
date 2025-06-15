"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";

const BlogPostPage = ({ params }: { params: { slug: string } }) => {
  // In a real application, you would fetch blog post data based on the slug
  const post = {
    title: "Placeholder Blog Post",
    date: "June 1, 2024",
    author: "CODELOOM Team",
    image: "/images/placeholder.svg",
    content: `
      <p>This is a placeholder for a full blog post. The content here would be fetched from a CMS and would contain rich text, images, and other media.</p>
      <p>The post would delve into a specific topic, offering insights, analysis, and practical advice. For example, a post about AI agents might discuss their architecture, use cases, and the future of autonomous systems.</p>
      <h2>Sub-heading for the Blog Post</h2>
      <p>Content would continue here, with proper formatting, to provide a comprehensive and engaging reading experience for the user.</p>
      <ul>
        <li>Detail one about the topic.</li>
        <li>Another interesting detail.</li>
        <li>A final, concluding point.</li>
      </ul>
    `,
  };

  return (
    <div className="py-24 sm:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link href="/blogs-and-news" className="inline-flex items-center gap-2 text-neutral-500 hover:text-foreground transition-colors mb-8">
              <ArrowLeft size={18} />
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold font-heading">{post.title}</h1>
            <div className="flex items-center gap-6 mt-4 text-neutral-500 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="my-12"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={800}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage; 