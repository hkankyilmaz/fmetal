import React from "react";
import card1 from "../../images/basınclıdokum.jpg";
import card2 from "../../images/yüksekbasınc.jpg";
import card3 from "../../images/dokumhane.jpg";
import card4 from "../../images/termokulp.webp";
import card5 from "../../images/alimunyumtitanit.jpg";
import card6 from "../../images/calsiumplaka.jpg";
import card7 from "../../images/ekstruzyon.jpg";
import card8 from "../../images/izo.jpg";
import card9 from "../../images/yanmaz.jpeg";
import card10 from "../../images/dokumocak.jpg";
import card11 from "../../images/kuy.jpg";
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
          <ProductCard img={card2} text="YÜKSEK BASINÇLI DÖKÜM KOVAN İMALATI" />
          <ProductCard img={card3} text="DÖKÜMHANE YARDIMCI MALZEMELERİ" />
          <ProductCard img={card4} text="TERMOKULP" />
          <ProductCard
            img={card5}
            text="ALUMİNYUM TİTANAT SERAMİK MALZEMELER"
          />
          <ProductCard img={card6} text="KALSİYUM SİLİKAT LEVHALAR" />
          <ProductCard img={card7} text="EKSTRÜZYON" />
          <ProductCard img={card8} text="İZOLASYON BÖLÜMÜ" />
          <ProductCard img={card9} text="YANMAZ KIYAFET" />
          <ProductCard img={card11} text="KUYUMCULUK MALZEMELERİ" />
          <ProductCard img={card10} text="DÖKÜM OCAKLARI" />
        </div>
      </div>
    </div>
  );
};

export default Products;
