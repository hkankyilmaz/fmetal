import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../images/logo.png";
import logoOne from "../../images/kırmızı-beyaz.png";
import logoTwo from "../../images/kırmızı-siyah.png";
import { Link } from "react-scroll";
import "./style.css";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [logo_, setLogo_] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  let location = useLocation();
  let path_ = location.pathname;

  const closeMenu = () => setClick(false);
  useEffect(() => {
    const nav = document.querySelector(".header");
    const hambg = document.querySelector(".hamburger");

    window.addEventListener("scroll", fixNav);

    function fixNav() {
      if (window.scrollY > 10) {
        nav.classList.add("active");
        hambg.classList.add("active");
        setLogo_(true);
      } else {
        nav.classList.remove("active");
        hambg.classList.remove("active");
        setLogo_(false);
      }
    }
  });

  return (
    <div className={`header ${path_ !== "/" ? "products-header" : ""}`}>
      <nav className="navbar">
        <a href="/" className="logo">
          <h1>
            <img src={logo_ ? logoTwo : logoOne} alt="logo" />
          </h1>
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes
              className={`${path_ !== "/" ? "fa fa_" : "fa"}`}
              size={30}
            />
          ) : (
            <FaBars
              className={`${path_ !== "/" ? "fa fa_" : "fa"}`}
              size={30}
            />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            {path_ == "/" ? (
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={closeMenu}
              >
                AnaSayfa
              </Link>
            ) : (
              <a href="/"> AnaSayfa</a>
            )}
          </li>
          {path_ == "/" ? (
            <>
              <li className="nav-item">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={closeMenu}
                >
                  Hakkımızda
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="testimonials"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={closeMenu}
                >
                  Ürünlerimiz
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="demo"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={closeMenu}
                >
                  İletişim
                </Link>
              </li>
            </>
          ) : (
            ""
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
