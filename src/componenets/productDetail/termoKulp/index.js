import React from "react";

import photoOne from "../../../images/termoKulp-One.png";
import photoTwo from "../../../images/termoKulp-two.jpg";
import photoThree from "../../../images/termoKulp-three.jpg";

function index() {
  return (
    <div className="product-info-container">
      <h4>DALDIRMA TİPİ SYALON KILIFLI SET</h4>
      <span className="img-span">
        <img src={photoOne} alt="Alimunyum Titanat" />
      </span>
      <br />
      <br />
      <span className="img-span">
        <img src={photoTwo} alt="Alimunyum Titanat" />
      </span>
      <br />
      <br />
      <h4>DALDIRMA TİPİ SYALON KILIFLI SET</h4>
      <span className="img-span">
        <img src={photoThree} alt="Alimunyum Titanat" />
      </span>
    </div>
  );
}

export default index;
