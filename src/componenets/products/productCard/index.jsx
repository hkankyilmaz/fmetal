import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const ProductCard = ({ img, text, url }) => {
  return (
    <Link to={url}>
      <div style={{ backgroundImage: `url(${img})` }} className="card">
        <p>{text} </p>
        <span />
        <p>Detaylar</p>

        <div className="sub-div"></div>
      </div>
    </Link>
  );
};

export default ProductCard;
