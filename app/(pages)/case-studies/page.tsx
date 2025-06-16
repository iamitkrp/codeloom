"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Zap, TrendingUp, Code, CheckCircle } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    id: "fintech-automation",
    client: "Fintech Innovators Inc.",
    clientLogo: "CLIENT LOGO", // Placeholder
    title: "AI-Powered Automation for a Leading Fintech Firm",
    mainImage: "/media/bg-animation.mp4", // Using available video
    problemStatement:
      "A leading fintech company was struggling with a high volume of manual, error-prone processes for customer onboarding and risk analysis, leading to slow service delivery and increased operational costs.",
    solutionHighlights: [
      "Developed a custom AI engine for real-time document verification.",
      "Implemented a machine learning model for predictive risk assessment.",
      "Automated over 85% of the manual onboarding tasks.",
      "Created a unified dashboard for monitoring and exception handling.",
    ],
    objective: "To drastically reduce processing time, improve accuracy, and enhance scalability for their core financial services.",
    successCriteria: [
        "Reduce customer onboarding time by 70%.",
        "Increase data processing accuracy to 99.5%.",
        "Decrease operational costs by 40%.",
    ],
    sdlc: "Agile methodology with bi-weekly sprints, allowing for iterative development and continuous feedback from the client.",
    results: [
      {
        value: "90%",
        label: "Reduction in manual processing",
        icon: <Zap className="w-8 h-8 text-purple-400" />,
      },
      {
        value: "75%",
        label: "Faster customer onboarding",
        icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      },
      {
        value: "99.8%",
        label: "Data accuracy achieved",
        icon: <CheckCircle className="w-8 h-8 text-blue-400" />,
      },
    ],
  },
  // Add another case study for variation
  {
    id: "health-tech-platform",
    client: "MediConnect Health",
    clientLogo: "CLIENT LOGO", // Placeholder
    title: "Revolutionizing Patient Data Management in Health Tech",
    mainImage: "/media/bg-animation.mp4", // Using available video
    problemStatement:
      "A healthcare provider was using a legacy system for patient data management that was inefficient, not scalable, and posed significant security risks, hindering their ability to provide modern, data-driven healthcare.",
    solutionHighlights: [
      "Built a secure, HIPAA-compliant cloud platform.",
      "Designed an intuitive interface for healthcare professionals.",
      "Integrated AI for predictive diagnostics from patient data.",
      "Enabled secure data sharing between departments.",
    ],
    objective: "To create a secure, scalable, and user-friendly platform that centralizes patient data and leverages AI for better health outcomes.",
    successCriteria: [
        "Achieve 100% HIPAA compliance.",
        "Improve data accessibility for authorized personnel by 80%.",
        "Reduce patient data retrieval time by 90%.",
    ],
    sdlc: "A hybrid model combining Waterfall for initial planning and Agile for the development and iteration phases to ensure compliance and flexibility.",
    results: [
      {
        value: "100%",
        label: "HIPAA Compliance",
        icon: <CheckCircle className="w-8 h-8 text-blue-400" />,
      },
      {
        value: "5x",
        label: "Faster Data Retrieval",
        icon: <Zap className="w-8 h-8 text-purple-400" />,
      },
      {
        value: "20%",
        label: "Improvement in diagnostic accuracy",
        icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      },
    ],
  },
];


const CaseStudiesPage = () => {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-line", {
                yPercent: 100,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
                stagger: 0.2,
            });

            gsap.from(".hero-subtitle", {
                opacity: 0,
                y: 20,
                duration: 1,
                delay: 0.8,
                ease: "power3.out",
            });
            
            caseStudies.forEach((_, index) => {
                const caseStudySection = `.case-study-section-${index}`;
                
                // Pinning and background image scaling
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: caseStudySection,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 1,
                        pin: true,
                        pinSpacing: false,
                        anticipatePin: 1,
                    },
                });

                tl.fromTo(`${caseStudySection} .case-study-image`, 
                    { scale: 1.2, opacity: 0.8 }, 
                    { scale: 1, opacity: 1, ease: "power2.inOut" }
                );

                // Content fade-in animation
                gsap.from(`${caseStudySection} .animated-content`, {
                    y: 40,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: caseStudySection,
                        start: 'top 50%',
                        toggleActions: 'play none none none',
                    }
                });
            });

        }, containerRef);
        
        return () => ctx.revert();
    }, []);
    

  return (
    <div ref={containerRef} className="bg-background text-foreground">

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center relative px-4">
        <h1 className="text-5xl md:text-7xl font-light tracking-tighter leading-tight">
            <span className="block overflow-hidden"><span className="hero-line inline-block">Real Problems,</span></span>
            <span className="block overflow-hidden"><span className="hero-line inline-block">Tangible Solutions.</span></span>
        </h1>
        <p className="hero-subtitle mt-6 max-w-2xl text-lg md:text-xl text-neutral-400">
            Explore how we've partnered with businesses to transform challenges into triumphs through technology and design.
        </p>
      </section>

      {/* Case Studies Sections */}
      <div className="relative">
        {caseStudies.map((study, index) => (
          <section key={study.id} className={`case-study-section-${index} h-screen w-full relative flex items-center justify-center`}>
              <div className="absolute inset-0 overflow-hidden">
                  <video
                      src={study.mainImage}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="object-cover w-full h-full case-study-image"
                  />
                  <div className="absolute inset-0 bg-black/60"></div>
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-8 text-white">
                  {/* Left side: Text content */}
                  <div className="space-y-8">
                      <div>
                          <p className="animated-content text-lg font-semibold text-purple-400 mb-2">{study.client}</p>
                          <h2 className="animated-content text-4xl md:text-5xl font-light tracking-tight">{study.title}</h2>
                      </div>

                      <div className="space-y-6">
                        <div className="animated-content">
                          <h3 className="text-2xl font-light border-b border-white/20 pb-2 mb-4">The Challenge</h3>
                          <p className="text-lg text-neutral-300">{study.problemStatement}</p>
                        </div>
                        <div className="animated-content">
                          <h3 className="text-2xl font-light border-b border-white/20 pb-2 mb-4">The Solution</h3>
                           <ul className="space-y-2 text-lg text-neutral-300">
                                {study.solutionHighlights.map((highlight, i) => (
                                    <li key={i} className="flex items-start">
                                        <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                      </div>
                  </div>
                  
                  {/* Right side: Results */}
                  <div className="space-y-8">
                      <div className="animated-content p-8 bg-black/20 backdrop-blur-md rounded-lg border border-white/10">
                          <h3 className="text-2xl font-light mb-6">Key Outcomes</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {study.results.map(result => (
                                <div key={result.label} className="flex items-center space-x-4">
                                    {result.icon}
                                    <div>
                                        <p className="text-3xl font-light">{result.value}</p>
                                        <p className="text-neutral-400">{result.label}</p>
                                    </div>
                                </div>
                            ))}
                          </div>
                      </div>

                      <div className="animated-content p-8 bg-black/20 backdrop-blur-md rounded-lg border border-white/10">
                        <h3 className="text-2xl font-light mb-4">Project Snapshot</h3>
                        <div className="space-y-4 text-neutral-300">
                           <p><strong>Objective:</strong> {study.objective}</p>
                           <p><strong>Success Criteria:</strong> {study.successCriteria.join(' ')}</p>
                           <p><strong>Methodology:</strong> {study.sdlc}</p>
                        </div>
                      </div>
                  </div>

              </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesPage; 