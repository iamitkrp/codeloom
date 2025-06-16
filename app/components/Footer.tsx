"use client"
import React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import MagneticButton from "./ui/MagneticButton";

const Footer = () => {
  const socialLinks = [
    { icon: <Twitter size={24} />, href: "https://twitter.com/codeloom" },
    { icon: <Github size={24} />, href: "https://github.com/codeloom" },
    { icon: <Linkedin size={24} />, href: "https://linkedin.com/company/codeloom" },
  ];

  const pageLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blogs-and-news" },
  ];
  
  const companyLinks = [
    { label: "Why Choose Us", href: "/why-choose-us" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ];

  return (
    <footer className="relative z-10 min-h-screen flex items-center justify-center text-neutral-300 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full -z-20">
        <video
          src="/media/custom-line-path-with-custom-matcap.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 w-full h-full bg-black/70 -z-10"></div>
      
      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative z-10 w-[90%] max-w-4xl bg-black/30 backdrop-blur-2xl p-8 md:p-12 rounded-2xl border border-white/10 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-light font-heading text-white mb-4">
          Let's Build Something Amazing
        </h2>
        <p className="text-neutral-300 max-w-xl mx-auto mb-10 text-lg">
          Ready to start a project or just want to chat? We're here to help.
        </p>
        
        <Link href="/contact" passHref>
          <MagneticButton>
            Get in Touch
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </MagneticButton>
        </Link>
        
        <div className="mt-16 border-t border-white/10 pt-8">
            <div className="flex justify-center space-x-6 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white hover:scale-110 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="text-neutral-500 text-sm">
                <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <span className="mx-2">|</span>
                <p className="inline">&copy; {new Date().getFullYear()} CODELOOM. All rights reserved.</p>
            </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer; 