"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";

const BlogPostPage = ({ params }: { params: { slug: string } }) => {
  // In a real application, you would fetch blog post data based on the slug
  const { slug } = params;

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
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto"
            >
              <Link
                href="/blogs-and-news"
                className="inline-flex items-center text-sky-400 hover:text-sky-300 transition-colors mb-4"
              >
                <ArrowLeft className="mr-2" size={16} />
                Back to Blog
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold font-heading capitalize">
                {slug.replace(/-/g, " ")}
              </h1>
              <div className="flex items-center space-x-4 mt-4 text-neutral-300">
                <div className="flex items-center">
                  <Calendar className="mr-2" size={16} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <User className="mr-2" size={16} />
                  <span>By {post.author}</span>
                </div>
              </div>
              <div className="prose prose-invert lg:prose-xl mt-6 text-neutral-300">
                <p>{post.content}</p>
                <p>
                  This is where the main body of the blog post would go. It can
                  contain paragraphs, headings, lists, images, and code blocks.
                  The content would be fetched from a CMS or a local markdown file
                  based on the slug.
                </p>
              </div>
            </motion.div>
          </div>

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
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage; 