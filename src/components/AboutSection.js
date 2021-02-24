import React from "react";

// Import Images
import aboutUs1 from "../img/frame-aboutUs.jpg";

// Styled
import styled from "styled-components"

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
const About = styled.div`
min-height: 90vh;
display:flex;
align-items:center;
justify-content:center;
padding:5rem 10rem;
color:white;
`;

const Description = styled.div`
flex:1;
overflow:hidden;
padding-right:8rem;

h2{
  font-weight:lighter;
}
`;

const Image = styled.div`
flex:1;
img{
  width:100%;
  height:80vh;
  object-fit:cover;
}
`;

const Hide =  styled.div`
overflow:hidden;

`;

export default AboutSection;
