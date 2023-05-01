import React from "react";
import { Link } from "react-scroll";
import "./style.css";
import { useLocation } from "react-router-dom";

const Footer = () => {
  let location = useLocation();
  let path_ = location.pathname;
  return (
    <div className="footer">
      <div className="container">
        <ul>
          {path_ == "/" ? (
            <>
              <li className="nav-item">
                <Link
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  AnaSayfa
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
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
                >
                  İletişim
                </Link>
              </li>{" "}
            </>
          ) : (
            <a className="nav-item footer-a" href="/">
              {" "}
              AnaSayfa
            </a>
          )}
        </ul>
        <div className="bottom">
          <span className="line"></span>
          <p>2023 Execute, Inc. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
