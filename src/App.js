import React from "react";
import About from "./componenets/about";
import Home from "./componenets/home";
import Navbar from "./componenets/navbar";
import Products from "./componenets/products";
import Contact from "./componenets/contact";
import Footer from "./componenets/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
