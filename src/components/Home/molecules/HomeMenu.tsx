import React from "react";
import styled from "styled-components";
// *Images
import NaviLogo from "img/logo-navi.png";
import WifiIcon from "icons/WifiIcon";
import LockIcon from "icons/LockIcon";
import AlertIcon from "icons/AlertIcon";
import HomeIcon from "icons/HomeIcon";
import PointsIcon from "icons/PointsIcon";
import GameIcon from "icons/GameIcon";
import PromoIcon from "icons/PromoIcon";
import LocationIcon from "icons/LocationIcon";
import FacebookIcon from "icons/FacebookIcon";
// *Components
import NavLi from "components/Home/atoms/NavLi";
import HomeWifi from "components/Home/atoms/HomeWifi";

const HomeMenuSt = styled.div`
  width: 100%;
  height: 100%;
  background: #070707;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: relative;
  animation: alert 0.3s ease;
  /* overflow-x: hidden;
  overflow-y: scroll; */
  @keyframes alert {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  .naviLogo {
    /* background: red; */
    width: 15rem;
    height: 14rem;
    object-fit: cover;
  }
  .wifiTitle {
    width: 15rem;
    height: auto;
    /* background: lime; */
    font-family: "Roboto 100";
    color: white;
    font-size: 1.5rem;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .date {
    color: #929292;
    font-family: "Roboto 300";
    font-size: 0.8rem;
    position: absolute;
    bottom: 1rem;
  }
  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
  }
`;
const HomeMenu = () => {
  return (
    <HomeMenuSt>
      <img className="naviLogo" src={NaviLogo} alt="logotipo navi" />
      <h2 className="wifiTitle">Wi - Fi</h2>
      <HomeWifi
        bg={""}
        color={""}
        fontSize={""}
        icon={WifiIcon}
        data={"Natus Vincere"}
      />
      <HomeWifi
        bg={""}
        color={""}
        fontSize={""}
        icon={LockIcon}
        data={"relax3000"}
      />
      <HomeWifi
        bg={"none"}
        color={"red"}
        fontSize={".8rem"}
        icon={AlertIcon}
        data={"Recuerda que la constraseña es renovada aleatoriamente."}
      />
      <NavLi
        to={"banner"}
        targetBlanck="_parent"
        icon={HomeIcon}
        data={"Home"}
      />
      <NavLi
        to={"points"}
        targetBlanck="_parent"
        icon={PointsIcon}
        data={"Canjea tus puntos"}
      />
      <NavLi
        to={"games"}
        targetBlanck="_parent"
        icon={GameIcon}
        data={"Juegos Actualizados"}
      />
      <NavLi
        to={"promo"}
        targetBlanck="_parent"
        icon={PromoIcon}
        data={"Promociones"}
      />
      <NavLi
        to={"location"}
        targetBlanck="_parent"
        icon={LocationIcon}
        data={"Ubicación"}
      />
      <NavLi
        to={"https://www.facebook.com/NaviGamesCbba"}
        targetBlanck="_blanck"
        icon={FacebookIcon}
        data={"Facebook"}
      />

      {/* <span className="date">Navi Games Cbba 2013 - {date}</span> */}
    </HomeMenuSt>
  );
};

export default HomeMenu;
