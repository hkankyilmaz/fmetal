import React from "react";
import "./style.css";

import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function ProductNavBar() {
  const ref = React.useRef();
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  // const handleClick = (e) => {
  //   if (e.target.tagName === "A" && window.innerWidth < 900) {
  //     console.log(ref.current.offsetTop);
  //     console.log(window);
  //     window.scrollTo({
  //       top: ref.current.offsetTop - 85,
  //       behavior: "smooth",
  //     });
  //   }
  // };

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
            <hr />
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
      <div ref={ref} className="productInfo">
        <Outlet />
      </div>
    </main>
  );
}

export default ProductNavBar;
