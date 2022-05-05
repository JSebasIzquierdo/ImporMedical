import React from "react";
import "../Product/styles.css";
import Button from "../Button";

const index = (props) => {
  return (
    <div className="productContainer">
      {props.extended ? (
        <>
          <div className="productBoxExtended">
            <div className="imgContainer">
              <img src={props.img} className="img" />
            </div>
          </div>

          <div className="descriptionContainer">
            <label>{props.descripcion}</label>
          </div>
          <div className="pricesContainer">
            <p className="pLine">$1.100.000</p>
            <p className="pPrice">$1.100.000</p>
          </div>
          <div className="buttonClass">
            <Button text={"AÑADIR A CARRITO"} />
          </div>
        </>
      ) : (
        <>
          <div className="productBox">
            <div className="imgContainer">
              <img src={props.img} className="img" />
            </div>
          </div>

          <div className="descriptionContainer">
            <label>{props.descripcion}</label>
          </div>
          <div className="buttonClass">
            <Button text={"AÑADIR A CARRITO"} />
          </div>
        </>
      )}
    </div>
  );
};

export default index;
