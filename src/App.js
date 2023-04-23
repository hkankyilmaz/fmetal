import React from "react";
import About from "./componenets/about";
import Home from "./componenets/home";
import Navbar from "./componenets/navbar";
import Products from "./componenets/products";
import Contact from "./componenets/contact";
import Footer from "./componenets/footer";

import ProductNavBar from "./componenets/productsNavbar";
import ProductOne from "./componenets/productDetail/basincliDokum/index";
import ProductTwo from "./componenets/productDetail/yüksekBasıncliDökümKovanİmalatı/index";
import ProductThree from "./componenets/productDetail/dokumhaneYardımcıMalzemeleri/index";
import ProductFour from "./componenets/productDetail/termoKulp/index";
import ProductFive from "./componenets/productDetail/aluminyumTitanatSeramikMalzemeler/index";
import ProductSeven from "./componenets/productDetail/Ekstrüzyon/index";
import ProductNine from "./componenets/productDetail/YanmazKıfayet/index";
import ProductTen from "./componenets/productDetail/kuyumculukMalzemeleri/index";
import ProductEleven from "./componenets/productDetail/dokumOcakları";
import { Routes, Route, ScrollRestoration } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <About />
              <Products />
              <Contact />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="urunler"
          element={
            <>
              <Navbar />
              <ProductNavBar />
              <Footer />
            </>
          }
        >
          <Route index element={<ProductOne />} />
          <Route path="basincli-dokum" element={<ProductOne />} />
          <Route
            path="yuksek-basincli-dokum-kovan-imalati"
            element={<ProductTwo />}
          />
          <Route
            path="dokumhane-yardimci-malzemeleri"
            element={<ProductThree />}
          />
          <Route path="termokulp" element={<ProductFour />} />
          <Route
            path="aluminyum-titanat-seramik-malzeme"
            element={<ProductFive />}
          />
          <Route
            path="kalsiyum-silikat-levhalar"
            element={
              <p>
                {" "}
                <strong>KALSİYUM SİLİKAT LEVHALAR</strong>
                <br /> <br /> Hazırlanıyor....
              </p>
            }
          />
          <Route path="ekstrüzyon" element={<ProductSeven />} />
          <Route
            path="izalosyon-bölümü"
            element={
              <p>
                {" "}
                <strong>İZOLASYON BÖLÜMÜ</strong>
                <br /> <br /> Hazırlanıyor....
              </p>
            }
          />
          <Route path="yanmaz-kiyafet" element={<ProductNine />} />
          <Route path="kuyumculuk-malzemeleri" element={<ProductTen />} />
          <Route path="döküm-ocaklari" element={<ProductEleven />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
