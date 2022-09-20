import React from "react";
import { Link } from "react-scroll";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <ul>
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
          </li>
        </ul>
        <div className="bottom">
          <span className="line"></span>
          <p>2022 Execute, Inc. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
