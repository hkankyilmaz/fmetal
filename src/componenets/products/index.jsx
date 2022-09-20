import React from "react";
import card1 from "../../images/basınclıdokum.jpg";
import card2 from "../../images/dovme.jpg";
import card3 from "../../images/ekstruzyon.jpg";
import ProductCard from "./productCard";
import "./style.css";

const Products = () => {
  return (
    <div className="testimonials" id="testimonials">
      <div className="container">
        <h2>Ürünlerimiz</h2>
        <span className="line"></span>
        <div className="content">
          <ProductCard img={card1} text="BASINÇLI DÖKÜM" />
          <ProductCard img={card2} text="METAL DÖVME" />
          <ProductCard img={card3} text="EKSTRUZYON" />
        </div>
      </div>
    </div>
  );
};

export default Products;
