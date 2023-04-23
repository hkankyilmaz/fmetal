import React from "react";

import photoOne from "../../../images/dokumOcakları.jpg";

function index() {
  return (
    <div className="product-info-container">
      <h4>DÖKÜM OCAKLARI</h4>
      <h5>ALÜMİNYUM VE ZAMAK ERGİTME OCAKLARI</h5>

      <p>
        Ocağın merkezindeki potanın etrafında belli bir boşluk bırakılarak, ateş
        tuğlasıyla etrafı örülmüş ocaklardır. Tuğla ile saç arasında yapılan
        farklı yöntemlerdeki izolasyonlar sayesinde minimum enerji kaybı
        yaşayarak en hızlı ergitmeyi sağlar. <br />
        <br />
        Potalı ocakların yakıt cinsine göre ayrılırlar; <br />
        <br />
        <strong>1)</strong> Elektrikli ocak; rezistans teli kullanılarak ergitme
        işleminin yapılması.
        <br /> <strong>2)</strong> Doğalgazlı ocak; brülör yardımıyla doğalgaz
        yakılarak ergitme işleminin yapılması.
        <br />
        <strong>3)</strong> Fuel Oil ocak; Full oil yakıt ile ergitme işleminin
        yapılması.
      </p>
      <br />
      <h5>ALÜMİNYUM VE ZAMAK ERGİTME OCAKLARI</h5>
      <p>
        Kullanım alanına göre potalı ve refrakter betonlu alüminyum – zamak
        bekletme ocakları imalatımız mevcuttur.{" "}
      </p>
      <br />
      <p>
        <span>- Brülür ve Bek Sistemleri</span> <br /> <br />
        Monoblok ve Multiblok olmak üzere iki ana grupta ürünlerimiz mevcuttur.
        40 kW’tan 11.500 kW’a kadar domestik-monoblok yakıcı, 67 mW’a kadar da
        değişik endüstriyel uygulamalar için, müşteri talepleri doğrultusunda
        sanayi- duoblok yakıcı tedariğinde bulunmaktayız. Yakıcı sistemler
        arasında sıvı, gaz ve çift yakıtlı ürünler ile biogaz, ethanol, kömür
        tozu, talaş, atık yağ ve atık gazlar için özel yakıcılar da
        bulunmaktadır.
      </p>
      <br />
      <br />
      <span className="img-span">
        <img src={photoOne} alt="#" />
      </span>
      <br />
      <br />
    </div>
  );
}

export default index;
