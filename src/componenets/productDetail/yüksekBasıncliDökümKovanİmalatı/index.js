import React from "react";

import photoOne from "../../../images/yüksekbasınc-two.jpg";

function index() {
  return (
    <div className="product-info-container">
      <h4>YÜKSEK BASINCLI DÖKÜM İÇİN KOVAN İMALATI</h4>
      <p style={{ marginBottom: "20px" }}>
        Yüksek basınç döküm makinası (Enjeksiyon döküm) için özel olarak yapmış
        olduğumuz kovan imalatımız müşterilerimizin teknik çizimlerine göre
        hazırlanmaktadır. Standart kovan üretiminin yanı sıra aynı zamanda
        firmamızın geliştirdiği özel tasarım kovan imalatımız da mevcuttur. Özel
        tasarım kovan imalatımız müşterilerimize hem zamandan kazanım hem de
        maliyet açısından fayda sağlamaktadır. Kovanın en fazla deformasyon
        gördüğü alüminyumun ilk temas noktası olan cehennemlik bölgesini insert
        yardımıyla kolay bir şekilde değişimini sağlanır. Bu da hem yeni bir
        kovan imalatında doğacak olan maliyeti 3’te 1 oranda düşürmekte olup
        aynı zamanda zaman kaybettirmediği için müşterilerimize çift fayda
        sağlamaktadır.
      </p>

      <span className="img-span">
        <img src={photoOne} alt="Alimunyum Titanat" />
      </span>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default index;
