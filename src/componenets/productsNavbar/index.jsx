import React from "react";
import "./style.css";

import { Outlet } from "react-router";
import { Link } from "react-router-dom";

function ProductNavBar() {
  return (
    <main className="productsNav">
      <aside className="productList">
        <h4 style={{ color: "darkred" }}>ÜRÜNLER</h4>
        <hr />
        <ul>
          <li>
            <Link to="/urunler/basincli-dokum">Basınçlı Döküm</Link>
            <hr />
          </li>
          <li>
            <Link to="/urunler/yuksek-basincli-dokum-kovan-imalati">
              Yüksek Basınçlı Döküm Kovan İmalatı
            </Link>
            <hr />
          </li>
          <li>
            <Link to="/urunler/dokumhane-yardimci-malzemeleri">
              Dökümhane Yardımcı Malzemeleri
            </Link>
            <hr />
          </li>
          <li>
            <Link to="/urunler/termokulp">Termokulp</Link>
            <hr />
          </li>

          <li>
            <Link to="/urunler/aluminyum-titanat-seramik-malzeme">
              Aluminyum Titanat Seramik Malzemeler
            </Link>
            <hr />
          </li>
          <li>
            <Link to="/urunler/kalsiyum-silikat-levhalar">
              Kalsiyum Silikat Levhalar
            </Link>
            <hr />
          </li>
          <li>
            <Link to="/urunler/ekstrüzyon">Ekstrüzyon</Link>
            <hr />
          </li>
          <li>
            <Link to="/urunler/izalosyon-bölümü">İzolasyon Bölümü</Link>
          </li>
          <li>
            <Link to="/urunler/yanmaz-kiyafet">Yanmaz Kıyafet</Link>
            <hr />
          </li>
          <li>
            <Link to="/urunler/kuyumculuk-malzemeleri">
              Kuyumculuk Malzemeleri
            </Link>
            <hr />
          </li>
          <li>
            <Link to="/urunler/döküm-ocaklari">Döküm Ocakları</Link>
            <hr />
          </li>
        </ul>
      </aside>
      <div className="productInfo">
        <Outlet />
      </div>
    </main>
  );
}

export default ProductNavBar;
