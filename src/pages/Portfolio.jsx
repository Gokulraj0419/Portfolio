import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactSection from "../components/ContactSection";
import Homesection from '../components/Homesection';
import ProjectSection from '../components/ProjectSection';
import Navigation from '../components/Navigation';
import Particlebackground from '../components/particlebackground';
import ResumeSection from '../components/ResumeSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';




function Portfolio() {
    const [activeSection, setActiveSection] = useState('home');

    const sections = {
        home: < Homesection />,
        about: <AboutSection />,
        projects: <ProjectSection />,
        contact: <ContactSection />,
        resume: <ResumeSection />,
        skills: <SkillsSection />,
    };
    console.log(Object.keys(sections))
    const pageVariants = {
        initial: { opacity: 0, x: -100 },
        in: { opacity: 1, x: 0 },
        out: { opacity: 0, x: 100 }
    };

    const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 0.6
    };

    return (
        <div className="position-relative min-vh-100 bg-dark text-white overflow-hidden" >
            {/* Particle background */}
            <Particlebackground />

            {/* Navigation */}
            <Navigation
                activeSection={activeSection}
                onSectionChange={setActiveSection} />

            <main className='relative z-10'>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSection}
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                        transition={pageTransition}
                    >
                        {sections[activeSection]}
                    </motion.div>
                </AnimatePresence>
            </main>


            {/* Background Elements */}
            <div className="position-fixed top-0 start-0 w-100 h-100" style={{ pointerEvents: "none", zIndex: -1 }}>
                <div className="position-absolute top-0 start-0 bg-red-blur-circle animate-pulse delay-0"></div>
                <div className="position-absolute bottom-0 end-0 bg-purple-blur-circle animate-pulse delay-1s"></div>
                <div className="position-absolute top-50 start-50 translate-middle bg-green-blur-circle animate-pulse delay-2s"></div>
            </div>

        </div>
    )
}

export default Portfolio;