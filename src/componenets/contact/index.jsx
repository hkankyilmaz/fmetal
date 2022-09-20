import React from "react";
import "./style.css";

const Contact = () => {
  return (
    <div className="demo" id="demo">
      <h2>İletişim</h2>
      <span className="line"></span>
      <div className="container">
        <div className="col-1">
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem, ipsum.</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            assumenda ad tempore reprehenderit perferendis quis exercitationem
            eos, provident tempora iusto, tenetur impedit fuga perspiciatis
            dolores aut voluptas maiores id maxime?
          </p>
        </div>
        <div className="col-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12033.989784741716!2d28.9808484!3d41.0581179!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x73674c40205aec4d!2sYap%C4%B1%20Kredi%20bomontiada!5e0!3m2!1str!2snl!4v1663649291550!5m2!1str!2snl"
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

//  <iframe
//    width="570"
//    height="320"
//    src="https://www.youtube.com/embed/oeqP5JtihMA"
//    title="Youtube video player"
//    frameBorder="0"
//    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//    allowFullScreen
//  />;
