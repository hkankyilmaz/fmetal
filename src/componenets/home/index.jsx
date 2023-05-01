import React from "react";
import "./style.css";
import "animate.css";

const Home = () => {
  return (
    <div className="hero">
      <div className="content">
        <p className="animate__animated animate__fadeInLeft animate__delay-2s">
          Bizi Arayın...
        </p>
        <p className="animate__animated animate__fadeInLeft animate__delay-2s">
          0532-175-34-89
        </p>
        <p className="animate__animated animate__fadeInUp">
          Kaliteli Hizmet...
        </p>
        <p className="animate__animated animate__fadeInUp animate__delay-1s">
          İhtiyaca Yönelik Çözümler
        </p>
      </div>
    </div>
  );
};

export default Home;
