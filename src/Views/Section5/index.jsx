import React from "react";
import Button from "../../Components/Button";
import Img1 from "../Section5/img/img1.jpg";
import Img2 from "../Section5/img/img2.jpg";
import "../Section5/style.css";
const index = () => {
  return (
    <div className="flex">
      <div className="divContainerS5">
        <img src={Img1} className={"imgCards"} />

        <div className="divTextImage">
          <p className="labelsCardsS5">Empresas en crecimiento</p>
        </div>
        <div className="divButtonImage">
          <Button text={"Ver Productos"} inverse></Button>
        </div>
      </div>
      <div className="divContainerS5">
        <img src={Img2} className={"imgCards"} />
        <div className="divTextImage">
          <p className="labelsCardsS5">
            Complemento línea de oximetría
          </p>
        </div>
        <div className="divButtonImage">
          <Button text={"Ver Productos"} inverse></Button>
        </div>
      </div>
    </div>
  );
};

export default index;
