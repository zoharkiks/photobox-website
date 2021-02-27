import React from "react";

// Routes
import {Link} from 'react-router-dom'

// Import Images
import aboutUs1 from "../img/frame-aboutUs.jpg";

// Styled
import { About, Description, Image, Hide } from "../styles.js";

// Framer Motion
import { motion } from "framer-motion";
import { titleAnim,fade, photoAim } from "../animation";
import Wave from './Wave'

const AboutSection = () => {
 

  return (
    <About>
      <Description>
        <motion.div
          
        >
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>photos</span> live
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>forever</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for framing your photographs in various designs and shapes.
          All frames are handmade by professionals.
        </motion.p>
        <Link to="/contact"> <motion.button variants={fade}>Contact Us</motion.button></Link>
      </Description>
      <Image>
        <motion.img variants={photoAim} src={aboutUs1} alt="frame" />
      </Image>
      <Wave/>
    </About>
  );
};

export default AboutSection;
