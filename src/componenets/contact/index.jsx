import React from "react";
import "./style.css";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className="demo" id="demo">
      <h2>İletişim</h2>
      <span className="line"></span>
      <div className="container">
        <div className="col-1">
          <p>Her Konu Hakkında Bize Ulaşın...</p>
          <p>İletişim Bilgileri...</p>
          <p>
            <p className="icons">
              <FontAwesomeIcon
                style={{ fontSize: "2rem", marginBottom: ".5rem" }}
                anima
                fade
                icon={faEnvelope}
              />
              <p className="contact-text">info@celikozmetalurji.com</p>
            </p>
            <p className="icons">
              <FontAwesomeIcon
                style={{ fontSize: "2rem", marginBottom: ".5rem" }}
                size="lg"
                fade
                icon={faPhone}
              />
              <p className="contact-text">0532 175 34 89</p>
            </p>
            <p className="icons">
              <FontAwesomeIcon
                style={{
                  fontSize: "2rem",
                  marginBottom: ".5rem",
                  marginLeft: "3px",
                }}
                size="lg"
                fade
                icon={faLocationDot}
              />
              <p className="contact-text" style={{ paddingLeft: "4px" }}>
                Güneşli Nah. Üsküp Cad. 1355 Sok. No: 6/2 Bağcılar/İstanbul
              </p>
            </p>
          </p>
        </div>
        <div className="col-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1063.9865670843938!2d28.82660829781906!3d41.03819579598244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa51d20943d5b%3A0x1a73116138602dcf!2zR8O8bmXFn2xpLCBPdmEgU2suLCAzNDIxMiBCYcSfY8SxbGFyL8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1682841921659!5m2!1str!2str"
            width="570"
            height="320"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
