import React from "react";
import Product from "../../Components/Product";
import Img1 from "../Section2/img/img1.png";
import Img2 from "../Section2/img/img2.png";
import Img3 from "../Section2/img/img3.png";
import Img4 from "../Section2/img/img4.png";
import "../Section2/styles.css";

const index = () => {
  return (
    <div className="spacingSection2">
      <div>
          <h2 className="titleProduct">TERAPIA RESPIRATORIAS</h2>

      </div>
      <div className="flexProductos">
        <Product
          descripcion={
            "Silla de Ruedas Motorizada gris metalizada abatible M2000"
          }
          img={Img1}
        />
        <Product
          descripcion={
            "Silla de Ruedas Motorizada gris metalizada abatible M2000"
          }
          img={Img2}
        />
        <Product
          descripcion={
            "Silla de Ruedas Motorizada gris metalizada abatible M2000"
          }
          img={Img3}
        />
        <Product
          descripcion={
            "Silla de Ruedas Motorizada gris metalizada abatible M2000"
          }
          img={Img4}
        />
      </div>
    </div>
  );
};

export default index;
