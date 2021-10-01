import React from "react";
import styled from "styled-components";
import { Switch } from "react-router-dom";
// *Redux
import { useDispatch, useSelector } from "react-redux";
import { showMenu } from "redux/actions/appAction";
// *Components
import HomeIntro from "components/Home/molecules/HomeIntro";
import HomePoints from "components/Home/molecules/HomePoints";
import HomeTitleComponent from "components/Home/atoms/HomeTitleComponent";
import HomeLocation from "components/Home/molecules/HomeLocation";
import HomeGames from "components/Home/molecules/HomeGames";
import HomePromo from "components/Home/molecules/HomePromo";
// *Icons
import MenuIcon from "icons/MenuIcon";

const MainPageSt = styled.div`
  background: #0e0d0d;
  width: 100%;
  height: auto;
  overflow-x: hidden;
  /* overflow-y: scroll; */
  /* position: relative; */

  .sysIconHamburguer {
    background: #ffffff;
    position: fixed;
    top: 1rem;
    left: 1rem;
    width: 3rem;
    height: 3rem;
    color: black;
    padding: 0.5rem;
    border-radius: 0.2rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    cursor: pointer;
  }
  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    .sysIconHamburguer {
      top: 2rem;
      left: 2rem;
    }
  }
`;
const MainPage = () => {
  const dispatch = useDispatch();
  const handleShowMenu = () => {
    dispatch(showMenu(true));
    console.log("asdasd");
  };
  return (
    <MainPageSt>
      <HomeIntro />
      <HomeTitleComponent
        id="points"
        title="CANJEA TUS PUNTOS!"
        bgTitle="#ff0040"
        color="white"
        line01="Por cada carga de 20Bs, el sistema te regala 4 puntos."
        line02="Esos puntos los puedes cambiar por crédito para seguir jugando o tambien los puedes cambiar por premios!"
      />
      <HomePoints />
      <HomeTitleComponent
        id="games"
        title="JUEGOS ACTUALIZADOS"
        bgTitle="#ff006a"
        color="white"
        line01="A continuación te mostramos los juegos más populares de Navi Games Cbba."
        line02="Si alguno no está actualizado, con solo notificar al que atiende tu juego estará actualizado en cuestión de minutos."
      />
      <HomeGames img={""} />
      <HomeTitleComponent
        id="promo"
        title="NUESTRAS PROMOCIONES"
        bgTitle="#0099ff"
        color="white"
        line01="No tienes que perderte de nuestras promociones!"
        line02="A continuación te mostramos algunas..."
      />
      <HomePromo />
      <HomeTitleComponent
        id="location"
        title="NUESTRA UBICACIÓN"
        bgTitle="#ffbb00"
        color="black"
        line01="Calle Jordan entre 16 de julio y antezana Nº723 acera norte. Planta baja del instituto INAP."
        line02="Abrimos de 7:30 am a 10:00 pm. Y lechu los fines de semana... :D "
      />
      <HomeLocation />
      <MenuIcon className="sysIconHamburguer" onClick={handleShowMenu} />
    </MainPageSt>
  );
};

export default MainPage;
