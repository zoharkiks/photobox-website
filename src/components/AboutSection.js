import React from "react";

// Import Images
import aboutUs1 from "../img/frame-aboutUs.jpg";

// Styled
import styled from "styled-components"
import {About, Description, Image, Hide} from "../styles.js"

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>photos</span> live
            </h2>
          </Hide>
          <Hide>
            <h2>forever</h2>
          </Hide>
        </div>
        <p>
          Contact us for framing your photographs in various designs and shapes.
          All frames are handmade by professionals.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={aboutUs1} alt="frame" />
      </Image>
    </About>
  );
};

// Styled Component


export default AboutSection;
