import PromoBanner from "components/home/atoms/PromoBanner";
import React from "react";
import styled from "styled-components";
// *Images
import angel from "img/promos/angel.jpg";
import fortnite from "img/promos/fortnite.jpg";
import pubg from "img/promos/pubg.jpg";
const HomePromoSt = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 100vw;
  grid-auto-rows: 100vh;
  /* gap: 1rem; */
  justify-content: center;
  align-content: center;

  // !Styles for DESKTOP
  @media only screen and (min-width: 568px) {
    grid-template-columns: 33.33% 33.33% 33.33%;
    grid-auto-rows: 100vh;
  }
`;

const HomePromo = () => {
  return (
    <HomePromoSt>
      <PromoBanner
        img={fortnite}
        gradient={
          "linear-gradient(0deg, #a922c3 0%, rgba(224, 253, 45, 0) 39%)"
        }
        title={"PROMO CUMPLE"}
        line01={"En tu cumple trae tu carnet y reclama tu doble carga!"}
        line02={""}
      />
      <PromoBanner
        img={pubg}
        gradient={
          "linear-gradient(0deg, #ff0074 0%, rgba(224, 253, 45, 0) 62%)"
        }
        title={"PROMO DOMINGO"}
        line01={"Aprovecha los domingos para comprar tu boleto..."}
        line02={"Por 50Bs, obtienes 60bs y 12 puntos."}
      />
      <PromoBanner
        img={angel}
        gradient={
          "linear-gradient(0deg, #ffaf00 0%, rgba(224, 253, 45, 0) 62%)"
        }
        title={"CUENTA INMORTAL"}
        line01={"¿NECESITAS MAS TIEMPO Y MEJOR PRECIO?"}
        line02={"Crea tu cuenta INMORTAL, la hora es mas económica."}
      />
    </HomePromoSt>
  );
};

export default HomePromo;
