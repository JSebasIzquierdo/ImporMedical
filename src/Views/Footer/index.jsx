import React from "react";
import "./styles.css";
import Img1 from "./img/logo1.png";
import Img2 from "./img/logo2.png";

const index = () => {
  return (
    <div className="footerMain">
      <div className="footerAlign">
        <div className="divAlign">
          <h4 className="titlesText">SOBRE NOSOTROS</h4>

          <div>
            <ul>
              <li>¿Quiénes somos?</li>
              <li>Nuestra historia</li>
              <li>Nuestra información</li>
            </ul>
          </div>
        </div>
        <div className="divAlign">
          <h4 className="titlesText">CATEGORÍAS DESTACADAS</h4>

          <div>
            <ul>
              <li>Profesionales de la salud</li>
              <li>Protección e higiene</li>
              <li>Control y prevención</li>
              <li>Movilidad</li>
              <li>Independencia y cuidado en el hogar</li>
              <li>Terapia respiratoria</li>
              <li>Confort</li>
            </ul>
          </div>
        </div>
        <div className="divAlign">
          <h4 className="titlesText">SERVICIO AL CLIENTE</h4>

          <div>
            <ul>
              <li>Política de entregas</li>
              <li>Política de devoluciones</li>
              <li>Política de garantías</li>
              <li>Política de cancelación</li>
              <li>WhatsApp 123 123 3434</li>
              <li>PBX 01 8000 123 345</li>
              <li>e-Mail: info@impormedical.com</li>
            </ul>
          </div>
        </div>
        <div className="divAlignPayments">
          <h4 className="titlesText">SUSCRÍBASE A NUESTRO NEWSLETTER</h4>

          <div>
            <input type="text" className="inputTypeFooter"  />
          </div>
          <div>
            <p className="textDevelop">
              Aceptación de términos y condiciones de manejo de datos
            </p>
          </div>
          <div>
            <p className="textDevelop">Nuestros métodos de pago</p>
          </div>
          <div>
            <img
              src="https://raycomsoluciones.com/site/images/medios.png"
              className="imgMediosDePago"
            />
          </div>
        </div>
      </div>
      <div>
        <hr className="divider" />
      </div>

      <div className="logosAlign">
        <div className="divsWidth">
          <p className="textDevelop">Desarrollado por</p>

          <img src={Img1} className="imgLogo1" />
          <img src={Img2} />
        </div>
      </div>
    </div>
  );
};

export default index;
