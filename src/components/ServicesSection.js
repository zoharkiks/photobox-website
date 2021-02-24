import React from "react";

// Import Images
import services from "../img/services.jpg"

// Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
                <img src={clock} alt="iconicon"/>
                <h3>Effecient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
                <img src={teamwork} alt="icon"/>
                <h3>Team Work</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
                <img src={diaphragm} alt="icon"/>
                <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
           <div className="card">
            <div className="icon">
                <img src={money} alt="icon"/>
                <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="image">
          <img src={services} alt="services"/>
      </div>
    </div>
  );
};

export default ServicesSection;
