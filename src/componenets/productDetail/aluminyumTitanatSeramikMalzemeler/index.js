import React from "react";
import "./style.css";
import photoOne from "../../../images/alimunyumtitanit.jpg";
import photoTwo from "../../../images/alimunyumtitanit-two.jpg";
import photoThree from "../../../images/alimunyumtitanit-Three.jpg";
import photoFour from "../../../images/alimunyumtitanit-Four.jpg";
import photoFive from "../../../images/alimunyumtitanit-Five.jpg";

function index() {
  return (
    <div className="product-info-container">
      <h4>ALUMİNYUM TİTANAT SERAMİK MALZEMELER</h4>
      <h5>DOSSİNG TUBE VE RİSER TUBE</h5>

      <span className="img-span">
        <img src={photoOne} alt="Alimunyum Titanat" />
      </span>
      <h6>Aliminium Titanate</h6>
      <table>
        <tr>
          <td>Items</td>
          <td>Datas</td>
        </tr>
        <tr>
          <td>Bulk Density</td>
          <td>3.3-3.5 g/cm3 </td>
        </tr>
        <tr>
          <td>Flexural Strength</td>
          <td>30-50 Mpa</td>
        </tr>
        <tr>
          <td>Porosity</td>
          <td>8% </td>
        </tr>
        <tr>
          <td>Thermal-expansison coefficient </td>
          <td>
            0.5-1.5 * 10<sup>-60</sup>{" "}
          </td>
        </tr>
        <tr>
          <td>Heat Conductivity (*800 °C)</td>
          <td>0.86 W/m.K</td>
        </tr>
      </table>
      <h5>STOPPER PLATE (TAPA-FLANŞ)</h5>
      <span className="img-span">
        <img src={photoTwo} alt="Alimunyum Titanat" />
      </span>
      <table>
        <tr>
          <td>Items</td>
          <td>Datas</td>
        </tr>
        <tr>
          <td>Bulk Density</td>
          <td>3.3-3.5 g/cm3 </td>
        </tr>
        <tr>
          <td>Flexural Strength</td>
          <td>30-50 Mpa</td>
        </tr>
        <tr>
          <td>Porosity</td>
          <td>8% </td>
        </tr>
        <tr>
          <td>Thermal-expansison coefficient </td>
          <td>
            0.5-1.5 * 10<sup>-60</sup>{" "}
          </td>
        </tr>
        <tr>
          <td>Heat Conductivity (*800 °C)</td>
          <td>0.86 W/m.K</td>
        </tr>
      </table>
      <h5>ALUMİNYUM TİTANAT ARA TÜPLER VE DİĞER SERAMİK PARÇALAR</h5>
      <span className="img-span">
        <img src={photoThree} alt="Alimunyum Titanat" />
      </span>
      <br />
      <span className="img-span">
        <img src={photoFour} alt="Alimunyum Titanat" />
      </span>
      <br />
      <span className="img-span">
        <img src={photoFive} alt="Alimunyum Titanat" />
      </span>
    </div>
  );
}

export default index;
