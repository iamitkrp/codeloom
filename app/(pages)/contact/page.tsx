"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Here you would typically send the form data to a backend API
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="py-24 sm:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-light font-heading">Get in Touch</h1>
          <p className="mt-4 text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-light font-heading mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-foreground" />
                <a href="mailto:hello@codeloom.com" className="text-lg hover:underline">hello@codeloom.com</a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-foreground" />
                <span className="text-lg">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-foreground" />
                <span className="text-lg">San Francisco, CA (Remote)</span>
              </div>
            </div>
            <p className="mt-8 text-neutral-500 dark:text-neutral-400">
                We're a fully remote team, but we're always available online. Schedule a call with us to discuss your next big idea.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {isSubmitted ? (
              <div className="text-center bg-green-100 dark:bg-green-900/50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold font-heading text-green-700 dark:text-green-300">Thank You!</h3>
                <p className="mt-2 text-green-600 dark:text-green-400">Your message has been sent successfully. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full p-4 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-transparent focus:ring-2 focus:ring-foreground focus:border-foreground" />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full p-4 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-transparent focus:ring-2 focus:ring-foreground focus:border-foreground" />
                <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required className="w-full p-4 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-transparent focus:ring-2 focus:ring-foreground focus:border-foreground" />
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required rows={5} className="w-full p-4 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-transparent focus:ring-2 focus:ring-foreground focus:border-foreground"></textarea>
                <button type="submit" disabled={isSubmitting} className="w-full px-8 py-4 bg-foreground text-background rounded-full font-medium text-lg hover:bg-neutral-800 transition-colors disabled:bg-neutral-400 disabled:cursor-not-allowed">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 