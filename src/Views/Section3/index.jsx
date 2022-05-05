import React from "react";
import "../Section3/styles.css";
import Img1 from "./img/img1.jpeg";
import Img2 from "./img/img2.jpg";
import Img3 from "./img/img3.jpg";
import Img4 from "./img/img4.png";
import Img5 from "./img/img5.png";
import Button from '../../Components/Button';

const index = () => {
  return (
    <div className="flexContainers">
      <div className="leftPart">
        <div className="cardsFlex">
          <div className="largeCard">
            <img src={Img1} className={"imgStyle"} />
            <p className="labelsCards">¿Por qué elegirnos? <br/>  <div className="buttonSpacing"><Button inverse text="Conoce más de nosotros"/></div> </p>
           
          </div>
          <div className="shortCard">
            <img src={Img2} className={"imgStyle"} />
            <p className="labelsCards">Tienda Surtida</p>
          </div>
        </div>
        <div className="cardsFlex">
          <div className="shortCard">
            <img src={Img3} className={"imgStyle"} />
            <p className="labelsCards">Usuario interesado</p>
          </div>
          <div className="largeCard">
            <img src={Img4} className={"imgStyle"} />
            <p className="labelsCards">Servicio Integral</p>
          </div>
        </div>
      </div>
      <div className="rightPart">
        <div className="verticalLargeImage">
          <img src={Img5} className={"imgStyle"} />
          <p className="labelsCards">Gente Informada</p>
        </div>
      </div>
    </div>
  );
};

export default index;
