import React from "react";
import Product from "../../Components/Product";
import Img1 from "../Section2/img/img1.png";
import Img2 from "../Section2/img/img2.png";
import Img3 from "../Section2/img/img3.png";
import Img4 from "../Section2/img/img4.png";
import "./styles.css";

const index = () => {
  return (
    <div>
      <div class="warpper">
        <input class="radio" id="one" name="group" type="radio" checked />
        <input class="radio" id="two" name="group" type="radio" />
        <input class="radio" id="three" name="group" type="radio" />

        <div class="tabs">
          <label class="tab" id="one-tab" for="one">
            SILLAS DE RUEDAS
          </label>
          <label class="tab" id="two-tab" for="two">
            TERAPIA EN EL HOGAR
          </label>
          <label class="tab" id="three-tab" for="three">
            MOVILIDAD
          </label>
        </div>

        <div class="panels">
          <div class="panel" id="one-panel">
            <div className="spacingPanels">
            <div>
              <h2 className="titleProductS4">SILLA DE RUEDAS</h2>
            </div>
            <div className="flexProductosS4">
              <Product
                descripcion={
                  "Silla de Ruedas Motorizada gris metalizada abatible M2000"
                }
                img={Img1}
                extended
              />
              <Product
                descripcion={
                  "Silla de Ruedas Motorizada gris metalizada abatible M2000"
                }
                img={Img2}
                extended
              />
              <Product
                descripcion={
                  "Silla de Ruedas Motorizada gris metalizada abatible M2000"
                }
                img={Img3}
                extended
              />
              <Product
                descripcion={
                  "Silla de Ruedas Motorizada gris metalizada abatible M2000"
                }
                img={Img4}
                extended
              />
            </div>

            </div>
            
          </div>
          <div class="panel" id="two-panel">
            <div className="spacingPanels">
            <div>
              <h2 className="titleProductS4">TERAPIA EN EL HOGAR</h2>
            </div>
            <div className="flexProductosS4">
              <Product
                descripcion={
                  "Silla de Ruedas Motorizada gris metalizada abatible M2000"
                }
                img={Img1}
                extended
              />
              <Product
                descripcion={
                  "Silla de Ruedas Motorizada gris metalizada abatible M2000"
                }
                img={Img2}
                extended
              />
              <Product
                descripcion={
                  "Silla de Ruedas Motorizada gris metalizada abatible M2000"
                }
                img={Img3}
                extended
              />
              <Product
                descripcion={
                  "Silla de Ruedas Motorizada gris metalizada abatible M2000"
                }
                img={Img4}
                extended
              />
            </div>

            </div>
            
          </div>
          <div class="panel" id="three-panel">
            <div className="spacingPanels">
              <div>
                <h2 className="titleProductS4">MOVILIDAD</h2>
              </div>
              <div className="flexProductosS4">
                <Product
                  descripcion={
                    "Silla de Ruedas Motorizada gris metalizada abatible M2000"
                  }
                  img={Img1}
                  extended
                />
                <Product
                  descripcion={
                    "Silla de Ruedas Motorizada gris metalizada abatible M2000"
                  }
                  img={Img2}
                  extended
                />
                <Product
                  descripcion={
                    "Silla de Ruedas Motorizada gris metalizada abatible M2000"
                  }
                  img={Img3}
                  extended
                />
                <Product
                  descripcion={
                    "Silla de Ruedas Motorizada gris metalizada abatible M2000"
                  }
                  img={Img4}
                  extended
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
