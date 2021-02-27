import React from "react";

// Page Components
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServicesSection from "../components/ServicesSection";

// Aniamtions
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation.js'

const AboutUs = () => {
  return (
    <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
      <AboutSection />
      <ServicesSection />
      <FaqSection/>
    </motion.div>
  );
};

export default AboutUs;
