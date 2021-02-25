import React from "react";

// Import Images
import services from "../img/services.jpg"

// Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";

// Styles
import styled from 'styled-components'
import {About, Description, Image} from '../styles'

const ServicesSection = () => {
  return (
    <Services>
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
                <img src={clock} alt="iconicon"/>
                <h3>Effecient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
                <img src={teamwork} alt="icon"/>
                <h3>Team Work</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
                <img src={diaphragm} alt="icon"/>
                <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
           <Card>
            <div className="icon">
                <img src={money} alt="icon"/>
                <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>  
          <img src={services} alt="services"/>
      </Image>
    </Services>
  );
};

const Services = styled(About)`
h2{
  padding-bottom:5rem;
}

p{
  width:80%;
  padding: 2rem 0rem 4rem 4rem;

}
`;

const Cards = styled.div`
display:flex;
flex-wrap:wrap;
`;

const Card = styled.div`
flex-basis:16rem;
.icon{
  display:flex;
  align-items:center;

  h3{
    margin-left:1rem;
    background:white;
    color:black;
    padding:1rem;
  }
}
`;

export default ServicesSection;
