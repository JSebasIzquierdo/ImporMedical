import React from "react";
import Img1 from "../Section1/img/img.jpg";
import Logo1 from "../Section1/img/logo1.png";
import "../Section1/styles.css";
import Button from "../../Components/Button";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const index = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <div className="arrayImage">
      <img
        src="https://www.bañeraporducha.com/wp-content/uploads/2019/08/C%C3%B3mo-crear-un-ba%C3%B1o-accesible.jpg"
        role="presentation" className="imgArray"
      />
       <img src={Logo1} className="logoAppear"/>
      <p>Tapabocas</p>
    </div>,
    <div className="arrayImage">
      <img
        src="https://cr00.epimg.net/radio/imagenes/2022/05/02/pasto/1651508262_101804_1651508410_noticia_normal.jpg"
        role="presentation" className="imgArray"
      />
       <img src={Logo1} className="logoAppear"/>
      <p>Tapabocas</p>
    </div>,
    <div className="arrayImage">
      <img
        src="https://rmcruzrojasanfernando.com/wp-content/uploads/2017/09/Residencia-de-mayores-san-fernando-cadiz-fisioterapia-geriatrica-1280x720.jpg"
        role="presentation" className="imgArray"
      />
       <img src={Logo1} className="logoAppear"/>
      <p>Tapabocas</p>
    </div>,
    <div className="arrayImage">
      <img
        src="https://www.tododisca.com/wp-content/uploads/2022/03/Mujer-en-silla-de-ruedas.jpg"
        role="presentation" className="imgArray"
      />
       <img src={Logo1} className="logoAppear"/>
      <p>Tapabocas</p>
    </div>,
    <div className="arrayImage">
      <img
        src="https://www.tododisca.com/wp-content/uploads/2022/03/Mujer-en-silla-de-ruedas.jpg"
        role="presentation" className="imgArray"
      />
       <img src={Logo1} className="logoAppear"/>
      <p>Tapabocas</p>
    </div>,
    <div className="arrayImage">
      <img
        src="https://www.tododisca.com/wp-content/uploads/2022/03/Mujer-en-silla-de-ruedas.jpg"
        role="presentation" className="imgArray"
      />
       <img src={Logo1} className="logoAppear"/>
      <p>Tapabocas</p>
    </div>,
    <div className="arrayImage">
      <img
        src="https://www.tododisca.com/wp-content/uploads/2022/03/Mujer-en-silla-de-ruedas.jpg"
        role="presentation" className="imgArray"
      />
      <img src={Logo1} className="logoAppear"/>
      <p>Tapabocas</p>
    </div>,
  ];

  return (
    <div>
      <div className="imgCover">
        <img src={Img1} className="imgFull" />
        <h2 className="labelCover">MÁS DE 800 MIL FAMILIAS HABILITADAS</h2>
        <div className="labelButton">
          <Button text={"VER PRODUCTOS"} inverse={true} />
        </div>
      </div>
      <div className="carrousel">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          
        />
      </div>
    </div>
  );
};

export default index;
