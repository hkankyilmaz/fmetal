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
import card12 from "../../images/piston-image.jpeg";
import ProductCard from "./productCard";
import "./style.css";

const Products = () => {
  return (
    <div className="testimonials" id="testimonials">
      <div className="container">
        <h2>Ürünlerimiz</h2>
        <span className="line"></span>
        <div className="content">
          <ProductCard
            url="/urunler/basincli-dokum"
            img={card1}
            text="BASINÇLI DÖKÜM"
          />
          <ProductCard
            url="/urunler/yuksek-basincli-dokum-kovan-imalati"
            img={card2}
            text="YÜKSEK BASINÇLI DÖKÜM KOVAN İMALATI"
          />
          <ProductCard url="/urunler/pistonlar" img={card12} text="PİSTONLAR" />
          <ProductCard
            url="/urunler/dokumhane-yardimci-malzemeleri"
            img={card3}
            text="DÖKÜMHANE YARDIMCI MALZEMELERİ"
          />
          <ProductCard url="/urunler/termokulp" img={card4} text="TERMOKULP" />
          <ProductCard
            url="/urunler/aluminyum-titanat-seramik-malzeme"
            img={card5}
            text="ALUMİNYUM TİTANAT SERAMİK MALZEMELER"
          />
          <ProductCard
            url="/urunler/kalsiyum-silikat-levhalar"
            img={card6}
            text="KALSİYUM SİLİKAT LEVHALAR"
          />
          <ProductCard
            url="/urunler/ekstrüzyon"
            img={card7}
            text="EKSTRÜZYON"
          />
          <ProductCard
            url="/urunler/izalosyon-bölümü"
            img={card8}
            text="İZOLASYON BÖLÜMÜ"
          />
          <ProductCard
            url="/urunler/yanmaz-kiyafet"
            img={card9}
            text="YANMAZ KIYAFET"
          />
          <ProductCard
            url="/urunler/kuyumculuk-malzemeleri"
            img={card11}
            text="KUYUMCULUK MALZEMELERİ"
          />
          <ProductCard
            url="/urunler/döküm-ocaklari"
            img={card10}
            text="DÖKÜM OCAKLARI"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
