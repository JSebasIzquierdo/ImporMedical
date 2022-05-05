import React from "react";
import Logo1 from "./img/logo1.png";
import Logo2 from "./img/logo2.png";
import Logo3 from "./img/logo3.png";
import Logo4 from "./img/logo4.png";
import "./styles.css";

const index = () => {
  return (
    <div className="mainMenu">
      <div className="topDividerMenu">
        <div>
          <img className="logoMenu"  src="https://impormedical.com.co/images/assests/IM/Logo_Impormedical_Horizontal.png" />
        </div>
        <div className="inputSearch">
          <input
            type="text"
            placeholder="¿QUÉ ESTÁS BUSCANDO? ESCRÍBELO AQUÍ"
            className="inputTextField"
          />
        </div>
        <div className="optionsTopMenu">
          <div className="optionsMenuItems">
            <p className="misPedidos">MIS PEDIDOS</p>
          </div>
          <div className="optionsMenuItems">
            <p>
              HOLA ALIAD@ <br /> INGRESA
            </p>
          </div>
          <div className="optionsMenuItems">
            <p>CARRITO</p>
          </div>
        </div>
      </div>
      <div className="secondDividerMenu">
        <div className="separatorOptions">
          <img src={Logo1} className="logosOptions"></img>
          <p className="pStyles">MOVILIDAD</p>
        </div>
        <div className="separatorOptions">
          <img src={Logo2} className="logosOptions"></img>
          <p className="pStyles">CUIDADO EN EL HOGAR</p>
        </div>
        <div className="separatorOptions">
          <img src={Logo3} className="logosOptions"></img>
          <p className="pStyles">PROFESIONALES DE LA SALUD</p>
        </div>
        <div className="separatorOptions">
          <img src={Logo4} className="logosOptions"></img>
          <p className="pStyles">TAPABOCAS Y DESINFECCIÓN</p>
        </div>
      </div>
    </div>
  );
};

export default index;
