import React from "react";
import '../Button/styles.css';

const index = (props) => {
  return <button className={props.inverse ? "buttonReverse": "button"}>{props.text}</button>;
};

export default index;
