"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrainCircuit, Workflow, Server, HeartPulse } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import FaqItem from "./FaqItem"; // We will create this component

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <BrainCircuit />,
    title: "AI Agents",
    description: "We build intelligent AI agents to automate tasks, analyze data, and provide personalized user experiences, driving efficiency and innovation.",
  },
  {
    icon: <Workflow />,
    title: "Custom Workflow Development",
    description: "Our team designs and implements bespoke workflows, integrating systems and automating processes to streamline your operations.",
  },
  {
    icon: <Server />,
    title: "Hosting and Development",
    description: "From robust web development to secure and scalable hosting solutions, we provide the technical foundation for your digital presence.",
  },
  {
    icon: <HeartPulse />,
    title: "Ongoing Maintenance",
    description: "We offer continuous support and maintenance to ensure your applications are always running smoothly, securely, and up-to-date.",
  },
];

const faqs = [
    {
      question: "What kind of AI agents can you build?",
      answer: "We can build a wide range of AI agents, from simple chatbots for customer service to complex agents that can perform data analysis, automate internal processes, or even control other software. We tailor each agent to your specific business needs."
    },
    {
      question: "How does the custom workflow development process work?",
      answer: "Our process starts with a deep dive into your existing operations to identify bottlenecks and opportunities for automation. We then design a custom workflow, develop the necessary software integrations, and implement it with minimal disruption to your business. We work closely with your team throughout the process."
    },
    {
      question: "What technologies do you use for development?",
      answer: "We are a full-stack development company and use a variety of modern technologies. For front-end, we often use frameworks like React and Next.js. For back-end, we work with Node.js, Python, and various databases. We choose the best tech stack for each project's specific requirements."
    },
    {
      question: "What is included in the ongoing maintenance plan?",
      answer: "Our maintenance plans are comprehensive. They typically include regular software updates, security monitoring and patching, performance optimization, bug fixes, and technical support. We offer different tiers of service to match your needs and budget."
    },
     {
      question: "How long does it take to build a custom solution?",
      answer: "The timeline for a custom solution varies greatly depending on the project's complexity. A simple workflow automation might take a few weeks, while a large-scale AI agent could take several months. We provide a detailed project timeline after our initial discovery phase."
    }
  ];
  

const ServicesPage = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // New hero section animations
      gsap.from(".hero-line", {
        yPercent: 100,
        opacity: 0,
        duration: 1.3,
        ease: "power4.out",
        stagger: 0.15,
      });

      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        delay: 0.8,
      });

      // Services grid animations
      gsap.from(".service-card", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
        },
      });
      
      // Process section animations
      gsap.from(".how-we-work-title", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".how-we-work-title",
          start: "top 80%",
        },
      });

      // Animate progress line
      gsap.to(".progress-line", {
        scaleY: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".how-we-work-container",
          start: "top 60%",
          end: "bottom 40%",
          scrub: 1,
        },
      });

      // Process steps animations
      gsap.from(".step", {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".how-we-work-container",
          start: "top 70%",
        }
      });

      // Step number animations
      gsap.from(".step-number", {
        scale: 0,
        rotation: 180,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".how-we-work-container",
          start: "top 70%",
        }
      });

      // Step visual animations
      gsap.from(".step-visual", {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".how-we-work-container",
          start: "top 70%",
        }
      });

      // Step tags animations
      gsap.from(".step-tags span", {
        opacity: 0,
        x: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".how-we-work-container",
          start: "top 60%",
        }
      });

      // Node pulse animations
      gsap.from(".step-node", {
        scale: 0,
        duration: 0.6,
        stagger: 0.3,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".how-we-work-container",
          start: "top 70%",
        }
      });

      // FAQ section animations
      gsap.from(".faq-title", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".faq-title",
          start: "top 80%",
        },
      });

      gsap.from(".faq-item", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".faq-container",
          start: "top 80%",
        },
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="text-foreground overflow-x-hidden relative">
      {/* Background Video with Blurry Overlay - Services Page Only */}
      <video
        className="pointer-events-none fixed inset-0 w-full h-full object-cover -z-20"
        src="/media/CODE_LOOM%20_LIQ.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      
      {/* Blurry overlay for services page background */}
      <div className="pointer-events-none fixed inset-0 w-full h-full bg-black/30 backdrop-blur-[3px] -z-10"></div>
      
      {/* Hero Section – redesigned */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-4">
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="font-heading font-extrabold leading-[1.15] text-white text-[clamp(2.5rem,10vw,7rem)] tracking-tight">
            <span className="block overflow-hidden pb-1">
              <span className="inline-block hero-line">Building</span>
            </span>
            <span className="block overflow-hidden pb-1">Digital&nbsp;Experiences</span>
            <span className="block overflow-hidden pb-1">that&nbsp;Inspire</span>
          </h1>
          <p className="hero-subtitle mt-6 md:mt-8 text-lg md:text-2xl text-neutral-200 max-w-3xl mx-auto">
            We blend cutting-edge AI, polished design, and robust engineering to craft products your users will love.
          </p>
        </div>
      </section>
      
      {/* Services Grid */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 services-grid">
          {services.map((service, index) => (
              <div key={index} className="service-card">
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section - Redesigned */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 how-we-work-container relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 how-we-work-title bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Our Process
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              A proven methodology that transforms ideas into exceptional digital experiences
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Animated Progress Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/30 to-transparent transform -translate-x-1/2">
              <div className="progress-line absolute top-0 left-0 w-full bg-gradient-to-b from-purple-500 to-blue-500 transform origin-top scale-y-0"></div>
            </div>

            {/* Process Steps */}
            <div className="space-y-32">
              {/* Step 1 - Discovery */}
              <div className="step relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 group">
                <div className="lg:w-1/2 lg:pr-16 text-center lg:text-right order-2 lg:order-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white text-2xl font-bold mb-6 step-number">
                    01
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white step-title">Discovery & Strategy</h3>
                  <p className="text-lg text-neutral-300 leading-relaxed step-description">
                    We dive deep into your vision, goals, and challenges. Through collaborative workshops and strategic analysis, we map out the perfect roadmap for your digital transformation.
                  </p>
                  <div className="flex justify-center lg:justify-end mt-6 gap-2 step-tags">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm">Research</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm">Planning</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm">Strategy</span>
                  </div>
                </div>
                
                {/* Center Node */}
                <div className="flex-shrink-0 relative order-1 lg:order-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full border-4 border-background step-node relative z-10"></div>
                  <div className="absolute inset-0 w-6 h-6 bg-purple-500 rounded-full animate-ping opacity-30"></div>
                </div>
                
                <div className="lg:w-1/2 lg:pl-16 order-3">
                  <div className="w-full h-64 bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-2xl border border-purple-500/20 flex items-center justify-center step-visual group-hover:border-purple-500/40 transition-all duration-500">
                    <div className="text-6xl text-purple-400 opacity-50">🎯</div>
                  </div>
                </div>
              </div>

              {/* Step 2 - Design */}
              <div className="step relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 group">
                <div className="lg:w-1/2 lg:pr-16 order-2 lg:order-1">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl border border-blue-500/20 flex items-center justify-center step-visual group-hover:border-blue-500/40 transition-all duration-500">
                    <div className="text-6xl text-blue-400 opacity-50">🎨</div>
                  </div>
                </div>
                
                {/* Center Node */}
                <div className="flex-shrink-0 relative order-1 lg:order-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full border-4 border-background step-node relative z-10"></div>
                  <div className="absolute inset-0 w-6 h-6 bg-blue-500 rounded-full animate-ping opacity-30"></div>
                </div>
                
                <div className="lg:w-1/2 lg:pl-16 text-center lg:text-left order-3">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-2xl font-bold mb-6 step-number">
                    02
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white step-title">Design & Prototyping</h3>
                  <p className="text-lg text-neutral-300 leading-relaxed step-description">
                    Our creative team transforms strategy into stunning, intuitive designs. We build interactive prototypes that bring your vision to life and ensure perfect user experiences.
                  </p>
                  <div className="flex justify-center lg:justify-start mt-6 gap-2 step-tags">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-sm">UI/UX</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-sm">Prototyping</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-sm">Design Systems</span>
                  </div>
                </div>
              </div>

              {/* Step 3 - Development */}
              <div className="step relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 group">
                <div className="lg:w-1/2 lg:pr-16 text-center lg:text-right order-2 lg:order-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white text-2xl font-bold mb-6 step-number">
                    03
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white step-title">Development & Integration</h3>
                  <p className="text-lg text-neutral-300 leading-relaxed step-description">
                    Our skilled developers bring designs to life with clean, scalable code. We build robust solutions and seamlessly integrate them with your existing systems and workflows.
                  </p>
                  <div className="flex justify-center lg:justify-end mt-6 gap-2 step-tags">
                    <span className="px-3 py-1 bg-green-500/20 text-green-200 rounded-full text-sm">Frontend</span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-200 rounded-full text-sm">Backend</span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-200 rounded-full text-sm">Integration</span>
                  </div>
                </div>
                
                {/* Center Node */}
                <div className="flex-shrink-0 relative order-1 lg:order-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full border-4 border-background step-node relative z-10"></div>
                  <div className="absolute inset-0 w-6 h-6 bg-green-500 rounded-full animate-ping opacity-30"></div>
                </div>
                
                <div className="lg:w-1/2 lg:pl-16 order-3">
                  <div className="w-full h-64 bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-2xl border border-green-500/20 flex items-center justify-center step-visual group-hover:border-green-500/40 transition-all duration-500">
                    <div className="text-6xl text-green-400 opacity-50">⚡</div>
                  </div>
                </div>
              </div>

              {/* Step 4 - Launch */}
              <div className="step relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 group">
                <div className="lg:w-1/2 lg:pr-16 order-2 lg:order-1">
                  <div className="w-full h-64 bg-gradient-to-br from-orange-500/10 to-orange-600/5 rounded-2xl border border-orange-500/20 flex items-center justify-center step-visual group-hover:border-orange-500/40 transition-all duration-500">
                    <div className="text-6xl text-orange-400 opacity-50">🚀</div>
                  </div>
                </div>
                
                {/* Center Node */}
                <div className="flex-shrink-0 relative order-1 lg:order-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full border-4 border-background step-node relative z-10"></div>
                  <div className="absolute inset-0 w-6 h-6 bg-orange-500 rounded-full animate-ping opacity-30"></div>
                </div>
                
                <div className="lg:w-1/2 lg:pl-16 text-center lg:text-left order-3">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white text-2xl font-bold mb-6 step-number">
                    04
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white step-title">Launch & Optimization</h3>
                  <p className="text-lg text-neutral-300 leading-relaxed step-description">
                    After rigorous testing, we launch your project with confidence. Our commitment continues with ongoing monitoring, optimization, and support to ensure sustained success.
                  </p>
                  <div className="flex justify-center lg:justify-start mt-6 gap-2 step-tags">
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-200 rounded-full text-sm">Testing</span>
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-200 rounded-full text-sm">Deployment</span>
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-200 rounded-full text-sm">Optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 faq-title">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <FaqItem question={faq.question} answer={faq.answer} />
              </div>
            ))}
          </div>
      </div>
      </section>
    </div>
  );
};

export default ServicesPage; 