import React from "react";
import "./style.css";

const ProductCard = ({ img, text }) => {
  return (
    <div style={{ background: `url(${img})` }} className="card">
      <p>{text} </p>
      <span />
      <p>Detaylar</p>

      <div className="sub-div"></div>
    </div>
  );
};

export default ProductCard;
