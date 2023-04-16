import React from "react";
import About from "./componenets/about";
import Home from "./componenets/home";
import Navbar from "./componenets/navbar";
import Products from "./componenets/products";
import Contact from "./componenets/contact";
import Footer from "./componenets/footer";

import ProductNavBar from "./componenets/productsNavbar";

import { Routes, Route, Outlet, Link } from "react-router-dom";

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
          <Route index path="basincli-dokum" element={<p>deneem 2</p>} />
          <Route
            index
            path="yuksek-basincli-dokum-kovan-imalati"
            element={<p>deneem 2</p>}
          />
          <Route
            index
            path="dokumhane-yardimci-malzemeleri"
            element={<p>deneem 2</p>}
          />
          <Route index path="termokulp" element={<p>deneem 2</p>} />
          <Route
            index
            path="aluminyum-titanat-seramik-malzeme"
            element={<p>deneem 2</p>}
          />
          <Route
            index
            path="kalsiyum-silikat-levhalar"
            element={<p>deneem 2</p>}
          />
          <Route index path="ekstrüzyon" element={<p>deneem 2</p>} />
          <Route index path="izalosyon-bölümü" element={<p>deneem 2</p>} />
          <Route index path="yanmaz-kiyafet" element={<p>deneem 2</p>} />
          <Route
            index
            path="kuyumculuk-malzemeleri"
            element={<p>deneem 2</p>}
          />
          <Route index path="döküm-ocakları" element={<p>deneem 2</p>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
